# SYSTEK

### Lag presentasjoner med systek-look

---

Med bilde-eksempel

<img src="http://localhost:1948/_assets/img/logo.svg" alt="Logo" style="width: 400px; height:300px"/>

---

Skriv MARKDOWN beskrevt hos
* [reveal-md](https://github.com/webpro/reveal-md)
* [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)


----


nedoverting



---

# OWASP TOP 10

----

### A1:2017-Injection

Application functions related to authentication and session management are often implemented
incorrectly, allowing attackers to compromise passwords, keys, or session tokens, or to exploit
other implementation flaws to assume other users’ identities temporarily or permanently.

----

### A2:2017-Broken Authentication

Many web applications and APIs do not properly protect sensitive data, such as financial,
healthcare, and PII. Attackers may steal or modify such weakly protected data to conduct credit
card fraud, identity theft, or other crimes. Sensitive data may be compromised without extra
protection, such as encryption at rest or in transit, and requires special precautions when
exchanged with the browser.

----

### A3:2017-Sensitive Data Exposure

Many older or poorly configured XML processors evaluate external entity references within XML
documents. External entities can be used to disclose internal files using the file URI handler,
internal file shares, internal port scanning, remote code execution, and denial of service attacks.

----

### A4:2017-XML External Entities (XXE)
Restrictions on what authenticated users are allowed to do are often not properly enforced.
Attackers can exploit these flaws to access unauthorized functionality and/or data, such as access
other users' accounts, view sensitive files, modify other users’ data, change access rights, etc.

----

### A5:2017-Broken Access Control

Security misconfiguration is the most commonly seen issue. This is commonly a result of insecure
default configurations, incomplete or ad hoc configurations, open cloud storage, misconfigured
HTTP headers, and verbose error messages containing sensitive information. Not only must all
operating systems, frameworks, libraries, and applications be securely configured, but they must
be patched and upgraded in a timely fashion.

XSS flaws occur whenever an application includes untrusted data in a new web page without
proper validation or escaping, or updates an existing web page with user-supplied data using a
browser API that can create HTML or JavaScript. XSS allows attackers to execute scripts in the
victim’s browser which can hijack user sessions, deface web sites, or redirect the user to
malicious sites.

----

### A7:2017-Cross-Site Scripting (XSS)

Insecure deserialization often leads to remote code execution. Even if deserialization flaws do not
result in remote code execution, they can be used to perform attacks, including replay attacks,
injection attacks, and privilege escalation attacks.

----

### A8:2017-Insecure Deserialization

Components, such as libraries, frameworks, and other software modules, run with the same
privileges as the application. If a vulnerable component is exploited, such an attack can facilitate
serious data loss or server takeover. Applications and APIs using components with known
vulnerabilities may undermine application defenses and enable various attacks and impacts.


----

### A9:2017-Using Components with Known Vulnerabilities
Insufficient logging and monitoring, coupled with missing or ineffective integration with incident
response, allows attackers to further attack systems, maintain persistence, pivot to more systems,
and tamper, extract, or destroy data. Most breach studies show time to detect a breach is over
200 days, typically detected by external parties rather than intern
