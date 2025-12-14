import { Audio } from "expo-av";
import { useEffect, useRef } from "react";

export function useSound(soundFile?: any) {
  const ref = useRef<Audio.Sound | null>(null);

  const play = async () => {
    try {
      if (!soundFile) return;

      if (ref.current) {
        await ref.current.stopAsync();
        await ref.current.unloadAsync();
        ref.current = null;
      }

      const s = new Audio.Sound();
      ref.current = s;

      await s.loadAsync(soundFile);
      await s.playAsync();

      s.setOnPlaybackStatusUpdate((status: any) => {
        if (status?.didJustFinish) {
          s.unloadAsync();
          if (ref.current === s) ref.current = null;
        }
      });
    } catch (e) {
      console.log("Audio error:", e);
    }
  };

  useEffect(() => {
    return () => {
      if (ref.current) {
        ref.current.unloadAsync();
        ref.current = null;
      }
    };
  }, []);

  return { play };
}
