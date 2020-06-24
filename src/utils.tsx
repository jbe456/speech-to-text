import { RcFile } from "antd/lib/upload";

export type FormOptions = {
  subscriptionKey: string;
  region: string;
  audio: { file: RcFile };
  locale: string;
};

export const colSpan = 20;
export const getTranscription = (currentResult: string, newChunk: string) =>
  currentResult ? `${currentResult}\r\n${newChunk}` : newChunk;

export const regions = [
  { geography: "Americas", name: "Central US", key: "centralus" },
  { geography: "Americas", name: "East US", key: "eastus" },
  { geography: "Americas", name: "East US 2", key: "eastus2" },
  { geography: "Americas", name: "North Central US", key: "northcentralus" },
  { geography: "Americas", name: "South Central US", key: "southcentralus" },
  { geography: "Americas", name: "West Central US", key: "westcentralus" },
  { geography: "Americas", name: "West US", key: "westus" },
  { geography: "Americas", name: "West US 2", key: "westus2" },
  { geography: "Americas", name: "Canada Central", key: "canadacentral" },
  { geography: "Americas", name: "Brazil South", key: "brazilsouth" },
  { geography: "Asia Pacific", name: "East Asia", key: "eastasia" },
  { geography: "Asia Pacific", name: "Southeast Asia", key: "southeastasia" },
  { geography: "Asia Pacific", name: "Australia East", key: "australiaeast" },
  { geography: "Asia Pacific", name: "Central India", key: "centralindia" },
  { geography: "Asia Pacific", name: "Japan East", key: "japaneast" },
  { geography: "Asia Pacific", name: "Japan West", key: "japanwest" },
  { geography: "Asia Pacific", name: "Korea Central", key: "koreacentral" },
  { geography: "Europe", name: "North Europe", key: "northeurope" },
  { geography: "Europe", name: "West Europe", key: "westeurope" },
  { geography: "Europe", name: "France Central", key: "francecentral" },
  { geography: "Europe", name: "UK South", key: "uksouth" },
];

export const languages = [
  { locale: "ar-AE", name: "Arabic (UAE)" },
  {
    name: "Arabic (Bahrain), modern standard",
    locale: "ar-BH",
  },
  {
    name: "Arabic (Egypt)",
    locale: "ar-EG",
  },
  {
    name: "Arabic (Israel)",
    locale: "ar-IL",
  },
  {
    name: "Arabic (Jordan)",
    locale: "ar-JO",
  },
  {
    name: "Arabic (Kuwait)",
    locale: "ar-KW",
  },
  {
    name: "Arabic (Lebanon)",
    locale: "ar-LB",
  },
  {
    name: "Arabic (Palestine)",
    locale: "ar-PS",
  },
  {
    name: "Arabic (Qatar)",
    locale: "ar-QA",
  },
  {
    name: "Arabic (Saudi Arabia)",
    locale: "ar-SA",
  },
  {
    name: "Arabic (Syria)",
    locale: "ar-SY",
  },
  {
    name: "Catalan",
    locale: "ca-ES",
  },
  {
    name: "Danish (Denmark)",
    locale: "da-DK",
  },
  {
    name: "German (Germany)",
    locale: "de-DE",
  },
  {
    name: "English (Australia)",
    locale: "en-AU",
  },
  {
    name: "English (Canada)",
    locale: "en-CA",
  },
  {
    name: "English (United Kingdom)",
    locale: "en-GB",
  },
  {
    name: "English (India)",
    locale: "en-IN",
  },
  {
    name: "English (New Zealand)",
    locale: "en-NZ",
  },
  {
    name: "English (United States)",
    locale: "en-US",
  },
  {
    name: "Spanish (Spain)",
    locale: "es-ES",
  },
  {
    name: "Spanish (Mexico)",
    locale: "es-MX",
  },
  {
    name: "Finnish (Finland)",
    locale: "fi-FI",
  },
  {
    name: "French (Canada)",
    locale: "fr-CA",
  },
  {
    name: "French (France)",
    locale: "fr-FR",
  },
  {
    name: "Gujarati (Indian)",
    locale: "gu-IN",
  },
  {
    name: "Hindi (India)",
    locale: "hi-IN",
  },
  {
    name: "Italian (Italy)",
    locale: "it-IT",
  },
  {
    name: "Japanese (Japan)",
    locale: "ja-JP",
  },
  {
    name: "Korean (Korea)",
    locale: "ko-KR",
  },
  {
    name: "Marathi (India)",
    locale: "mr-IN",
  },
  {
    name: "Norwegian (Bokmål) (Norway)",
    locale: "nb-NO",
  },
  {
    name: "Dutch (Netherlands)",
    locale: "nl-NL",
  },
  {
    name: "Polish (Poland)",
    locale: "pl-PL",
  },
  {
    name: "Portuguese (Brazil)",
    locale: "pt-BR",
  },
  {
    name: "Portuguese (Portugal)",
    locale: "pt-PT",
  },
  {
    name: "Russian (Russia)",
    locale: "ru-RU",
  },
  {
    name: "Swedish (Sweden)",
    locale: "sv-SE",
  },
  {
    name: "Tamil (India)",
    locale: "ta-IN",
  },
  {
    name: "Telugu (India)",
    locale: "te-IN",
  },
  {
    name: "Thai (Thailand)",
    locale: "th-TH",
  },
  {
    name: "Turkish (Turkey)",
    locale: "tr-TR",
  },
  {
    name: "Chinese (Mandarin, simplified)",
    locale: "zh-CN",
  },
  {
    name: "Chinese (Cantonese, Traditional)",
    locale: "zh-HK",
  },
  {
    name: "Chinese (Taiwanese Mandarin)",
    locale: "zh-TW",
  },
];
