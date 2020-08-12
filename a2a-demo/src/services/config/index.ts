import { AppConfig } from "@/models/appConfig";
import Axios from "axios";
import { UserVuetifyPreset } from "vuetify";

export async function getAppConfig(): Promise<AppConfig> {
  const appConfig = await Axios.get("config/config.json");
  return Promise.resolve(appConfig.data as AppConfig);
}

export async function getThemeConfig(): Promise<UserVuetifyPreset> {
  const response = await Axios.get("config/vuetify.json");
  return Promise.resolve(response.data as UserVuetifyPreset);
}
