import React, { useState } from "react";
import "./App.css";
import {
  SpeechRecognizer,
  SpeechConfig,
  AudioConfig,
  PropertyId,
  CancellationReason,
} from "microsoft-cognitiveservices-speech-sdk";
import { Input, Form, Upload, Button, Select } from "antd";
import "antd/dist/antd.css";
import TextArea from "antd/lib/input/TextArea";
import {
  languages,
  regions,
  colSpan,
  getTranscription,
  FormOptions,
} from "./utils";

function App() {
  const [form] = Form.useForm();
  const [
    startRecognizeButtonDisabled,
    setStartRecognizeButtonDisabled,
  ] = useState(false);
  const [result, setResult] = useState("");
  const [status, setStatus] = useState("Service ready!");

  const startRecognition = ({
    subscriptionKey,
    audio,
    locale,
    region,
  }: FormOptions) => {
    console.log({
      subscriptionKey,
      audio,
      locale,
      region,
    });
    setStartRecognizeButtonDisabled(true);
    setResult("");

    const speechConfig = SpeechConfig.fromSubscription(subscriptionKey, region);
    speechConfig.speechRecognitionLanguage = locale;
    speechConfig.setProperty(
      PropertyId.SpeechServiceConnection_InitialSilenceTimeoutMs.toString(),
      "20000"
    );
    speechConfig.setProperty(
      PropertyId.SpeechServiceConnection_EndSilenceTimeoutMs.toString(),
      "20000"
    );

    const start = new Date();
    let intermediateResult = "";

    const audioConfig = AudioConfig.fromWavFileInput(audio.file);
    const recognizer = new SpeechRecognizer(speechConfig, audioConfig);

    recognizer.recognizing = (sender, event) => {
      setStatus("Receiving events...");
      setResult(getTranscription(intermediateResult, event.result.text));
    };
    recognizer.recognized = (sender, event) => {
      const transcription = getTranscription(
        intermediateResult,
        event.result.text
      );
      setResult(transcription);
      intermediateResult = transcription;
    };

    recognizer.canceled = (sender, event) => {
      setStartRecognizeButtonDisabled(false);

      if (event.reason === CancellationReason.EndOfStream) {
        const end = new Date();
        const elapsedTime = new Date(end.getTime() - start.getTime())
          .toISOString()
          .substr(11, 8);
        setStatus(`Recognition done in ${elapsedTime}`);
      } else {
        setStatus(`Error: ${event.errorDetails} ${event.reason}`);
      }

      recognizer.close();
    };

    setStatus("Starting recognition...");
    recognizer.startContinuousRecognitionAsync(
      () => {
        setStatus("Connected!");
      },
      (err) => {
        setStartRecognizeButtonDisabled(false);
        setStatus(`Error: ${err}`);

        recognizer.close();
      }
    );
  };

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>
        Microsoft Azure - Cognitive Services - Speech To Text
      </h1>
      <Form
        form={form}
        initialValues={{ locale: "en-US" }}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: colSpan }}
      >
        <Form.Item
          name="subscriptionKey"
          label="Subscription Key"
          rules={[
            {
              required: true,
              message: "Must provide a Cognitive Services subscription key",
            },
          ]}
        >
          <Input type="text" />
        </Form.Item>
        <Form.Item
          name="region"
          label="Region"
          rules={[
            {
              required: true,
              message: "Must select a region",
            },
          ]}
        >
          <Select showSearch placeholder="Select region">
            {regions.map((region) => (
              <Select.Option value={region.key} key={region.key}>
                {region.geography} - {region.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="locale"
          label="Language"
          rules={[
            {
              required: true,
              message: "Must select a language",
            },
          ]}
        >
          <Select showSearch placeholder="Select language">
            {languages.map((language) => (
              <Select.Option value={language.locale} ket={language.locale}>
                {language.name}
              </Select.Option>
            ))}
          </Select>
        </Form.Item>
        <Form.Item
          name="audio"
          label="Audio (16kHz mono)"
          rules={[
            {
              required: true,
              message: "Must upload a .wav audio file 16kHz mono",
            },
          ]}
        >
          <Upload
            accept=".wav"
            multiple={false}
            beforeUpload={(file) => {
              return false;
            }}
          >
            <Button>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: colSpan }}>
          <Button
            onClick={async () => {
              try {
                const values = (await form.validateFields()) as FormOptions;
                startRecognition(values);
              } catch (errorInfo) {}
            }}
            disabled={startRecognizeButtonDisabled}
            type="primary"
          >
            Start recognition
          </Button>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 4, span: colSpan }}>
          {status}
        </Form.Item>
        <Form.Item label="Results">
          <TextArea
            value={result}
            onChange={() => {}}
            style={{ height: 400 }}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default App;
