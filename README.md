# Browser-Tracker-Blocker
Many websites use hidden tracking scripts to collect user data like browsing habits and clicks, mainly for ads and analytics.  This project creates a browser extension that **finds and blocks tracking websites** automatically. It also shows how many trackers were blocked so the user can stay aware and protect their privacy.

============================================================
                PROJECT REPORT
============================================================

Project Title : Browser Extension to Block Online Trackers
Submitted by  : _________NANDISH C_____________

------------------------------------------------------------
1. INTRODUCTION
------------------------------------------------------------
Online websites often use tracking scripts to collect user
data without their direct knowledge. These trackers monitor
browsing behavior, preferences, clicks, and personal details
for targeted advertising and data analytics.

To protect user privacy, this project implements a browser
extension that **detects and blocks known tracking domains**.
The extension also displays the number of blocked trackers,
offering transparency and control to the user.

------------------------------------------------------------
2. OBJECTIVE
------------------------------------------------------------
• To develop a privacy-focused browser extension
• To block known tracking and analytics scripts
• To display the number of trackers blocked
• To give users awareness and control over online privacy

------------------------------------------------------------
3. TOOLS & TECHNOLOGIES USED
------------------------------------------------------------
• JavaScript
• HTML & CSS
• Chrome Extension Manifest v3
• Declarative Net Request API
• Local Storage API

------------------------------------------------------------
4. PROPOSED SYSTEM ARCHITECTURE
------------------------------------------------------------

                    +----------------------+
                    |  User Browsing Web   |
                    +----------+-----------+
                               |
                               v
                     +---------+----------+
                     | Network Requests   |
                     +---------+----------+
                               |
                               v
               +---------------+----------------+
               | Tracker Blocker Extension      |
               | - Tracker Rules (rules.json)   |
               | - Background Script            |
               | - Badge Counter                |
               +---------------+----------------+
                               |
                          Block / Allow
                               |
                               v
                     +---------+----------+
                     | Safe Web Experience |
                     +---------------------+

------------------------------------------------------------
5. WORKING PRINCIPLE
------------------------------------------------------------
1. A predefined list of known tracker domains is maintained.
2. When the user visits any website, all network requests
   made by the page are examined.
3. If a request matches the tracker list, it is blocked.
4. The extension badge icon updates the number of trackers blocked.
5. The popup interface shows the total blocked count.

------------------------------------------------------------
6. IMPLEMENTATION STEPS
------------------------------------------------------------
Step 1: Create project folder with required files:
    - manifest.json
    - background.js
    - rules.json
    - popup.html
    - popup.js
    - style.css

Step 2: Load extension in Chrome:
    • Open: chrome://extensions/
    • Enable: Developer Mode
    • Click: Load unpacked
    • Select project folder

Step 3: Test on websites known to track users.

------------------------------------------------------------
7. OUTPUT / SCREENSHOTS
------------------------------------------------------------

[INSERT IMAGE HERE: Screenshot of extension loaded in Chrome]

[INSERT IMAGE HERE: Screenshot of badge counter increasing]

[INSERT IMAGE HERE: Screenshot of popup UI showing blocked count]

------------------------------------------------------------
8. RESULTS & ANALYSIS
------------------------------------------------------------
• The extension successfully blocks known tracking scripts.
• Badge count increases when trackers are intercepted.
• Works in real time without affecting webpage performance.
• Enhances user privacy and browsing security.

------------------------------------------------------------
9. ADVANTAGES
------------------------------------------------------------
• Protects user privacy
• Lightweight and fast
• Easy to use and monitor
• No external databases required

------------------------------------------------------------
10. FUTURE ENHANCEMENTS
------------------------------------------------------------
• Add whitelist/blacklist domain control
• Add analytics dashboard to show blocked trackers by domain
• Support for Firefox and Edge browsers
• Auto-update tracker list from privacy organizations

------------------------------------------------------------
11. CONCLUSION
------------------------------------------------------------
This project successfully demonstrates the creation of a privacy-
focused browser extension that blocks online trackers. It helps
users maintain control over personal browsing data, ensuring safer
and more private internet usage.

