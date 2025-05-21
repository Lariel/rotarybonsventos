import { getRemoteConfig } from 'firebase/remote-config';
import { app } from '@app/config/firebaseSDKConfig';
import { features } from '@app/model/Features';

const remoteConfig: any = getRemoteConfig(app);

remoteConfig.settings.minimumFetchIntervalMillis = 0;
remoteConfig.defaultConfig = { ...features};

export { remoteConfig };
