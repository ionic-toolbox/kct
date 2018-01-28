import { TextToSpeech } from '@ionic-native/text-to-speech';
import { Injectable } from '@angular/core';
import { Events } from 'ionic-angular';
import * as constant from 'app/constant';
import { IVoiceMessage } from 'models';


@Injectable()
export class TtsProvider {

    /* istanbul ignore next */
    constructor(private tts: TextToSpeech, private events: Events) {
        this.events.subscribe(constant.EVENT_TTS_SAY, this.textToSpeech);
    }

    /* istanbul ignore next */
    textToSpeech = (voiceMessage: IVoiceMessage) => {

        this.tts.speak({
            text: voiceMessage.text,
            locale: voiceMessage.locale,
            rate: 1
        })
            .then(() => console.log('[tts:textToSpeech] success:', voiceMessage.text, voiceMessage.locale))
            .catch((reason: any) => console.error('[tts:textToSpeech] failed:', reason, voiceMessage.text, voiceMessage.locale));
    }
}