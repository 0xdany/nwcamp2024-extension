declare module 'howler' {
  export class Howl {
    constructor(options: HowlOptions);
    play(id?: string): string;
    pause(id?: string): this;
    stop(id?: string): this;
    mute(muted?: boolean, id?: string): this;
    volume(vol?: number, id?: string): number | this;
    rate(rate?: number, id?: string): number | this;
    seek(seek?: number, id?: string): number | this;
    loop(loop?: boolean, id?: string): boolean | this;
    playing(id?: string): boolean;
    duration(id?: string): number;
    state(): string;
    unload(): void;
  }

  export interface HowlOptions {
    src: string | string[];
    volume?: number;
    loop?: boolean;
    autoplay?: boolean;
    mute?: boolean;
    preload?: boolean | 'metadata';
    rate?: number;
    pool?: number;
    html5?: boolean;
  }

  export class Howler {
    static mute(muted: boolean): void;
    static volume(vol?: number): number | void;
    static codecs(ext: string): boolean;
    static unload(): void;
    static usingWebAudio: boolean;
    static noAudio: boolean;
    static autoSuspend: boolean;
    static autoUnlock: boolean;
  }
}
