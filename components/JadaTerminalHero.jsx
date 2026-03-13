import { useEffect, useMemo, useState } from 'react';
import { RoughNotation } from 'react-rough-notation';

const ASCII_ART = String.raw`
     ██╗ █████╗ ██████╗  █████╗
     ██║██╔══██╗██╔══██╗██╔══██╗
     ██║███████║██║  ██║███████║
██   ██║██╔══██║██║  ██║██╔══██║
╚█████╔╝██║  ██║██████╔╝██║  ██║
 ╚════╝ ╚═╝  ╚═╝╚═════╝ ╚═╝  ╚═╝
`;

export default function JadaTerminalHero() {
  const terminalText = useMemo(
    () => '5 Errores de arquitectura que cometí construyendo un agente ReAct desde cero.',
    []
  );
  const [asciiVisible, setAsciiVisible] = useState('');
  const [typedText, setTypedText] = useState('');
  const [showNotation, setShowNotation] = useState(false);

  useEffect(() => {
    setShowNotation(true);

    let asciiIndex = 0;
    let textIndex = 0;
    let textTimer;

    const asciiTimer = window.setInterval(() => {
      asciiIndex += 1;
      setAsciiVisible(ASCII_ART.slice(0, asciiIndex));

      if (asciiIndex >= ASCII_ART.length) {
        window.clearInterval(asciiTimer);
        textTimer = window.setInterval(() => {
          textIndex += 1;
          setTypedText(terminalText.slice(0, textIndex));

          if (textIndex >= terminalText.length) {
            window.clearInterval(textTimer);
          }
        }, 24);
      }
    }, 4);

    return () => {
      window.clearInterval(asciiTimer);
      if (textTimer) {
        window.clearInterval(textTimer);
      }
    };
  }, [terminalText]);

  return (
    <section className="relative left-1/2 right-1/2 -mx-[50vw] mb-14 w-screen overflow-hidden bg-[#f8f9fa] px-4 py-10 md:px-8 md:py-16 dark:bg-gray-950">
      <div className="pointer-events-none absolute -left-32 top-0 h-80 w-80 rounded-full bg-violet-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute -bottom-24 right-0 h-[28rem] w-[28rem] rounded-full bg-emerald-500/10 blur-[160px]" />

      <div className="mx-auto flex min-h-[calc(100vh-7rem)] max-w-6xl flex-col items-center justify-center gap-8">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-lg border border-[#333] bg-[#0c0c0c] shadow-[0_0_30px_rgba(0,255,65,0.1),inset_0_0_10px_#000]">
          <div className="absolute inset-0 z-[1] opacity-80 pointer-events-none" style={{ backgroundImage: 'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0) 50%, rgba(0,0,0,0.1) 50%, rgba(0,0,0,0.1))', backgroundSize: '100% 4px' }} />

          <div className="flex items-center border-b-2 border-[#333] bg-[#1e1e1e] px-3 py-2">
            <span className="mr-2 h-3 w-3 rounded-full bg-[#ff5f56]" />
            <span className="mr-2 h-3 w-3 rounded-full bg-[#ffbd2e]" />
            <span className="mr-2 h-3 w-3 rounded-full bg-[#27c93f]" />
            <div className="flex-1 pr-[60px] text-center font-mono text-[0.85rem] text-[#888]">root@vps:~ /opt/jada</div>
          </div>

          <div className="relative min-h-[420px] px-6 py-8 font-mono text-[#0c0] [text-shadow:0_0_5px_rgba(0,255,0,0.5)] md:px-8 md:py-10">
            <pre className="mb-8 w-full overflow-x-auto whitespace-pre text-[0.8rem] leading-[1.2] text-[#0f0] md:text-[0.95rem]">{asciiVisible}</pre>

            <div className="max-w-4xl text-[1rem] leading-7 text-[#0c0] md:text-[1.1rem]">
              {typedText}
              <span className="ml-1 inline-block h-5 w-[10px] animate-pulse bg-[#0f0] align-middle shadow-[0_0_8px_#0f0]" />
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-3 text-center text-sm text-gray-500 dark:text-gray-400">
          <RoughNotation type="underline" color="rgba(124, 58, 237, 0.8)" show={showNotation} animationDuration={900}>
            <span>Baja para empezar el artículo</span>
          </RoughNotation>
          <div className="flex h-10 w-[26px] justify-center rounded-full border-2 border-current">
            <div className="mt-2 h-2 w-1 animate-bounce rounded-full bg-current" />
          </div>
        </div>
      </div>
    </section>
  );
}