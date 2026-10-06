import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css";

function Type() {
  return (
    <div className="linux-command">
      <Typewriter
        options={{
          strings: [
            "nmap -sCV -p 1-65535 target.lab",
            "bloodhound-python -d corp.local -c All",
            "hashcat -a 0 hashes.ntds rockyou.txt",
            "linpeas.sh | tee loot/linpeas.log",
            "msfvenom -p windows/x64/meterpreter_reverse_https",
            "winpeas.exe > loot/winpeas.txt",
            "mimikatz sekurlsa::logonpasswords",
            "curl https://discord.com/api/webhooks/...",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 80,
          cursor: "_",
        }}
      />
    </div>
  );
}

export default Type;
