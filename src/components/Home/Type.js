import React from "react";
import Typewriter from "typewriter-effect";
import "./Type.css"; // Ensure the CSS file is imported

function Type() {
  return (
    <div className="linux-command">
      <Typewriter
        options={{
          strings: [
            "nmap -A -p- 1.1.1.1", // Aggressive scan with all ports
            "sudo tcpdump -i eth0 port 80", // Capture HTTP traffic on eth0
            "john --wordlist=rockyou.txt hash.txt", // Crack passwords with John the Ripper
            "sqlmap -u 'http://yoursite.com/page?id=1' --dbs", // SQL injection with sqlmap
            "dirb http://1.1.1.1 /usr/share/wordlists/dirb/common.txt", // Directory brute-force
            "sudo fail2ban-client status sshd", // Check SSH fail2ban status
            "iptables -L -v -n", // List firewall rules
            "nikto -h http://1.1.1.1", // Web server vulnerability scan
            "gobuster dir -u http://1.1.1.1 -w common.txt", // Web directory enumeration
            "sudo auditctl -l", // List active audit rules
            "chkrootkit", // Check for rootkits
            "whois example.com", // Domain information lookup
            "netcat -lvnp 4444", // Listen for incoming connections with netcat
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 30,
          delay: 80, // Slower typing speed for realism
          cursor: "_", // Blinking cursor
        }}
      />
    </div>
  );
}

export default Type;
