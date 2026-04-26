import {
  KeyRound,
  Mail,
  ShieldCheck,
  Globe,
  Wifi,
  Smartphone,
  Lock,
  RefreshCcw,
  AlertTriangle,
  Trophy
} from "lucide-react";

const lessons = [
  {
    id: 1,
    title: "Strong Passwords",
    icon: KeyRound,
    objective: "Learn how to create strong, unique passwords that are harder to guess or crack.",
    content: [
      "A strong password should be long, unique, and difficult to predict.",
      "Avoid names, birthdays, and simple patterns such as 123456.",
      "Password managers can help generate and store strong passwords safely."
    ],
    scenario: "You are creating an account for your school portal.",
    tip: "Use unique passwords for every important account.",
    quizzes: [
      {
        id: 1,
        type: "mcq",
        question: "Choose the strongest password example:",
        options: ["Happy123", "Password2026", "Computer!Human7#Interaction51", "stlouis"],
        answer: 2,
        explanation: "Long, mixed-character passwords are stronger."
      },
      {
        id: 2,
        type: "tf",
        question: "True or False: Using the same password for all accounts is safe.",
        answer: false,
        explanation: "Reusing passwords increases risk if one account is compromised."
      },
      {
        id: 3,
        type: "mcq",
        question: "Which tool helps store strong passwords safely?",
        options: ["Calculator", "Password manager", "Camera app", "Notepad file"],
        answer: 1,
        explanation: "Password managers are designed to securely store and generate passwords."
      },
      {
        id: 4,
        type: "mcq",
        question: "Which password is weakest?",
        options: ["123456", "Happy$Day08", "False#Sky22", "Busy!Road3L"],
        answer: 0,
        explanation: "123456 is extremely easy to guess."
      }
    ]
  },

  {
    id: 2,
    title: "Phishing Emails",
    icon: Mail,
    objective: "Identify suspicious email signs before clicking anything.",
    content: [
      "Phishing emails often create urgency, fear, or excitement.",
      "Check the sender address carefully, not just the display name.",
      "Hover over links before clicking to inspect the real destination."
    ],
    scenario: "You receive an email saying your account will be locked in 10 minutes.",
    tip: "Visit the official website directly instead of clicking email links.",
    quizzes: [
      {
        id: 1,
        type: "mcq",
        question: "Which sign is the biggest phishing red flag?",
        options: [
          "It arrives in the morning",
          "It creates urgency and asks you to click a link",
          "It uses your name",
          "It includes a company logo"
        ],
        answer: 1,
        explanation: "Urgency is commonly used to pressure users into acting quickly."
      },
      {
        id: 2,
        type: "tf",
        question: "True or False: All emails with logos are legitimate.",
        answer: false,
        explanation: "Attackers can copy logos easily."
      },
      {
        id: 3,
        type: "mcq",
        question: "What should you do before clicking an email link?",
        options: ["Reply first", "Hover to inspect the URL", "Forward it", "Print it"],
        answer: 1,
        explanation: "Hovering helps reveal suspicious destinations."
      },
      {
        id: 4,
        type: "mcq",
        question: "What is the safest response to a suspicious bank email?",
        options: [
          "Click immediately",
          "Reply with your information",
          "Go to the bank’s official website directly",
          "Ignore your bank account forever"
        ],
        answer: 2,
        explanation: "Access the site directly instead of using the email link."
      }
    ]
  },

  {
    id: 3,
    title: "Two-Factor Authentication",
    icon: ShieldCheck,
    objective: "Understand why 2FA adds an extra layer of protection.",
    content: [
      "Two-factor authentication adds another step after your password.",
      "Even if someone steals your password, they may still be blocked.",
      "Authenticator apps are usually safer than SMS when possible."
    ],
    scenario: "A website offers password-only login or password plus authentication code.",
    tip: "Enable 2FA first on your email and banking accounts.",
    quizzes: [
      {
        id: 1,
        type: "tf",
        question: "True or False: 2FA helps protect accounts even if your password is stolen.",
        answer: true,
        explanation: "2FA adds another barrier beyond the password."
      },
      {
        id: 2,
        type: "mcq",
        question: "Which is an example of a second authentication factor?",
        options: ["Username", "Password", "Authentication code", "Profile photo"],
        answer: 2,
        explanation: "A one-time code is a separate factor."
      },
      {
        id: 3,
        type: "mcq",
        question: "Why is 2FA useful?",
        options: [
          "It makes usernames shorter",
          "It adds extra security",
          "It removes the need for passwords",
          "It blocks all internet access"
        ],
        answer: 1,
        explanation: "It strengthens account protection."
      },
      {
        id: 4,
        type: "tf",
        question: "True or False: Authenticator apps can be safer than SMS for 2FA.",
        answer: true,
        explanation: "Authenticator apps reduce some SMS-related risks."
      }
    ]
  },

  {
    id: 4,
    title: "Safe Web Browsing",
    icon: Globe,
    objective: "Recognize unsafe links and suspicious websites.",
    content: [
      "Look for trustworthy domains and avoid strange URLs.",
      "Attackers often imitate real brands with small spelling changes.",
      "Unexpected popups and forced downloads are warning signs."
    ],
    scenario: "You must choose between a suspicious shopping URL and the official site.",
    tip: "Check the real domain name carefully before logging in.",
    quizzes: [
      {
        id: 1,
        type: "mcq",
        question: "Which URL is more trustworthy?",
        options: ["amaz0n-login.net", "amazon.com", "shop-amazon-alert.org", "amazon-secure-now.biz"],
        answer: 1,
        explanation: "The official domain is safer than lookalike domains."
      },
      {
        id: 2,
        type: "tf",
        question: "True or False: A longer web address is always safer.",
        answer: false,
        explanation: "Long URLs can still be fake or misleading."
      },
      {
        id: 3,
        type: "mcq",
        question: "Which is a warning sign of a suspicious site?",
        options: ["Clear navigation", "Unexpected download prompts", "Proper branding", "Helpful FAQ"],
        answer: 1,
        explanation: "Forced downloads are a common warning sign."
      },
      {
        id: 4,
        type: "mcq",
        question: "Before entering your password on a site, you should:",
        options: ["Refresh 10 times", "Check the domain carefully", "Close your eyes", "Type quickly"],
        answer: 1,
        explanation: "Always verify the site before logging in."
      }
    ]
  },

  {
    id: 5,
    title: "Public Wi-Fi Risks",
    icon: Wifi,
    objective: "Learn how to stay safer on public networks.",
    content: [
      "Public Wi-Fi can expose your activity if the network is insecure.",
      "Avoid banking or private logins on unknown public networks.",
      "Use trusted networks, VPNs, and HTTPS whenever possible."
    ],
    scenario: "You are at a coffee shop using free Wi-Fi.",
    tip: "Use mobile data for sensitive logins when possible.",
    quizzes: [
      {
        id: 1,
        type: "tf",
        question: "True or False: Public Wi-Fi is always safe for banking.",
        answer: false,
        explanation: "Sensitive tasks should be avoided on unknown public Wi-Fi."
      },
      {
        id: 2,
        type: "mcq",
        question: "What is the safest option for checking bank information?",
        options: ["Public Wi-Fi", "Unknown hotspot", "Mobile data", "Someone else’s phone"],
        answer: 2,
        explanation: "Mobile data is generally safer for sensitive access."
      },
      {
        id: 3,
        type: "mcq",
        question: "Which tool can help protect traffic on public Wi-Fi?",
        options: ["VPN", "Flashlight", "Calendar", "Printer"],
        answer: 0,
        explanation: "A VPN can help secure network traffic."
      },
      {
        id: 4,
        type: "tf",
        question: "True or False: You should avoid sensitive logins on unknown networks.",
        answer: true,
        explanation: "Unknown public networks can be risky."
      }
    ]
  },

  {
    id: 6,
    title: "Spot the Scam Message",
    icon: Smartphone,
    objective: "Detect suspicious text messages that try to trick you.",
    content: [
      "Scam texts may claim prizes, missed deliveries, or urgent payments.",
      "Emotional pressure and short deadlines are common warning signs.",
      "Never respond with personal or payment information."
    ],
    scenario: "You receive a text asking for a small payment to release a package.",
    tip: "Verify delivery issues through the official company website.",
    quizzes: [
      {
        id: 1,
        type: "mcq",
        question: "What is the safest action after getting a suspicious delivery text?",
        options: [
          "Pay the fee immediately",
          "Click the link quickly",
          "Verify through the official website",
          "Send your card number"
        ],
        answer: 2,
        explanation: "Use the company’s official website, not the text link."
      },
      {
        id: 2,
        type: "tf",
        question: "True or False: Small payment scams can be used to steal card information.",
        answer: true,
        explanation: "Scammers often use small fake fees to collect payment details."
      },
      {
        id: 3,
        type: "mcq",
        question: "Which is a scam clue?",
        options: ["Official tracking on company website", "Urgent payment demand by text", "Normal order email", "Saved contact name"],
        answer: 1,
        explanation: "Urgent payment requests through random texts are suspicious."
      },
      {
        id: 4,
        type: "tf",
        question: "True or False: You should reply with personal information to confirm the message.",
        answer: false,
        explanation: "Never send private details through suspicious messages."
      }
    ]
  },

  {
    id: 7,
    title: "Protecting Personal Information",
    icon: Lock,
    objective: "Understand what information should be kept private online.",
    content: [
      "Personal information includes passwords, addresses, IDs, and banking details.",
      "Sharing too much can increase fraud and identity theft risk.",
      "Only provide information when it is necessary and trustworthy."
    ],
    scenario: "A website asks for your full address and password to claim a free gift.",
    tip: "Only share information that is truly needed.",
    quizzes: [
      {
        id: 1,
        type: "mcq",
        question: "What should you do if a random website asks for your password?",
        options: ["Share it", "Ignore the risk", "Avoid giving it", "Post it publicly"],
        answer: 2,
        explanation: "Passwords should never be shared with unrelated websites."
      },
      {
        id: 2,
        type: "tf",
        question: "True or False: Free offers sometimes ask for unnecessary private data.",
        answer: true,
        explanation: "Scam offers often request more information than needed."
      },
      {
        id: 3,
        type: "mcq",
        question: "Which is sensitive personal information?",
        options: ["Favorite color", "Password", "Movie title", "Pet name only"],
        answer: 1,
        explanation: "Passwords are highly sensitive."
      },
      {
        id: 4,
        type: "mcq",
        question: "Before sharing personal information, ask:",
        options: [
          "Is this really necessary?",
          "Can I share more?",
          "Will this make me famous?",
          "Can strangers see it?"
        ],
        answer: 0,
        explanation: "Always question whether the request is legitimate and necessary."
      }
    ]
  },

  {
    id: 8,
    title: "Device Updates",
    icon: RefreshCcw,
    objective: "See why software updates matter for security.",
    content: [
      "Updates often fix vulnerabilities and improve security.",
      "Outdated apps and systems can be easier to attack.",
      "Automatic updates reduce the chance of forgetting important patches."
    ],
    scenario: "Your device keeps asking you to install a security update.",
    tip: "Install updates from official sources and do not delay too long.",
    quizzes: [
      {
        id: 1,
        type: "tf",
        question: "True or False: Security updates help fix known vulnerabilities.",
        answer: true,
        explanation: "Updates often patch weaknesses attackers can exploit."
      },
      {
        id: 2,
        type: "mcq",
        question: "Why should you install updates?",
        options: ["To remove the internet", "To improve security", "To delete apps", "To lower battery permanently"],
        answer: 1,
        explanation: "Updates often improve security and stability."
      },
      {
        id: 3,
        type: "mcq",
        question: "Where should updates come from?",
        options: ["Random popup", "Official source", "Unknown message link", "Friend’s flash drive"],
        answer: 1,
        explanation: "Install updates only from trusted official sources."
      },
      {
        id: 4,
        type: "tf",
        question: "True or False: Delaying updates for too long can increase risk.",
        answer: true,
        explanation: "Unpatched systems may remain vulnerable."
      }
    ]
  },

  {
    id: 9,
    title: "Privacy Settings & Sharing",
    icon: AlertTriangle,
    objective: "Manage privacy settings and think before posting online.",
    content: [
      "Apps and platforms may collect more data than users expect.",
      "Review profile visibility, location sharing, and permissions.",
      "Once public, information can spread quickly."
    ],
    scenario: "You are about to upload a photo showing your ID and address.",
    tip: "Check your image background and privacy settings before posting.",
    quizzes: [
      {
        id: 1,
        type: "mcq",
        question: "What should you do before posting a photo with personal details visible?",
        options: ["Upload quickly", "Crop or hide the details", "Share in more groups", "Ignore it"],
        answer: 1,
        explanation: "Removing sensitive details reduces privacy risk."
      },
      {
        id: 2,
        type: "tf",
        question: "True or False: Once information is public online, it can spread quickly.",
        answer: true,
        explanation: "Public content can be copied and shared easily."
      },
      {
        id: 3,
        type: "mcq",
        question: "Which setting should you review often?",
        options: ["Screen brightness", "Privacy settings", "Speaker volume", "Wallpaper"],
        answer: 1,
        explanation: "Privacy settings control who can see your data."
      },
      {
        id: 4,
        type: "mcq",
        question: "Why should you check app permissions?",
        options: [
          "To give every app full access",
          "To control what data apps can use",
          "To make apps slower",
          "To remove internet forever"
        ],
        answer: 1,
        explanation: "Permissions help limit unnecessary access to your data."
      }
    ]
  },

  {
    id: 10,
    title: "Social Engineering",
    icon: Trophy,
    objective: "Recognize manipulation tactics used to trick people into giving access or information.",
    content: [
      "Social engineering targets human behavior rather than only software.",
      "Attackers may pretend to be support staff, teachers, or officials.",
      "Pause, verify identity, and do not rush."
    ],
    scenario: "Someone calls pretending to be tech support and asks for your password.",
    tip: "Verify identity through an official channel before sharing anything.",
    quizzes: [
      {
        id: 1,
        type: "tf",
        question: "True or False: You should share your password if the caller sounds official.",
        answer: false,
        explanation: "Attackers often sound convincing."
      },
      {
        id: 2,
        type: "mcq",
        question: "What is the safest response to a suspicious caller?",
        options: [
          "Share your password",
          "Hang up and verify through official contact",
          "Give your bank details too",
          "Trust them immediately"
        ],
        answer: 1,
        explanation: "Verification is essential before sharing information."
      },
      {
        id: 3,
        type: "mcq",
        question: "What does social engineering mainly target?",
        options: ["Human behavior", "Only hardware", "Only printers", "Screen color"],
        answer: 0,
        explanation: "Social engineering manipulates people."
      },
      {
        id: 4,
        type: "tf",
        question: "True or False: Pressure and urgency are common manipulation tactics.",
        answer: true,
        explanation: "Attackers often try to rush victims into bad decisions."
      }
    ]
  }
];

export default lessons;