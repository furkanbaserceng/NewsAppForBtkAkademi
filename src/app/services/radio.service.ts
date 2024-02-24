import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadioService {

  private audio: HTMLAudioElement;

  constructor() {
    this.audio = new Audio();
  }

  play(url: string): void {
    this.audio.src = url;
    this.audio.play();
  }

  pause(): void {
    this.audio.pause();
  }

  stop(): void {
    this.audio.pause();
    this.audio.currentTime = 0;
  }

  isPlaying(): boolean {
    return !this.audio.paused;
  }
}
