const genZDictionary = {
  "i don't know": "idk",
  "be right back": "brb",
  "laugh out loud": "lol",
  "by the way": "btw",
  "as soon as possible": "asap",
  "to be honest": "tbh",
  "oh my god": "omg",
  "not gonna lie": "ngl",
  "i don't care": "idc",
  "for real": "fr",
  "in my opinion": "imo",
  "to be honest": "tbh",
  "see you later": "cya",
  "goodbye": "laters",
  "you only live once": "yolo",
  "fear of missing out": "fomo",
  "best friend": "bff",
  "before": "b4",
  "you": "u",
  "are": "r",
  "really": "fr",
  "okay": "okurr",
  "hello": "yo",
  "friend": "homie",
  "amazing": "fire",
  "cool": "lit",
  "great": "slay",
  "funny": "lol",
  "serious": "deadass",
  "yes": "bet",
  "no": "nah",
  "angry": "salty",
  "jealous": "pressed",
  "ugly": "busted",
  "beautiful": "snatched",
  "famous": "clout",
  "money": "bands",
  "crazy": "wildin",
  "confused": "lost af",
  "i love you": "ily",
  "wait a minute": "hold up",
  "so true": "fax",
  "embarrassing": "cringe",
  "very good": "goated",
  "calm down": "chill",
  "that’s cool": "vibes",
  "it’s okay": "no cap",
  "it’s not okay": "that ain’t it",
  "i agree": "facts",
  "i disagree": "cap",
  "don’t lie": "no cap",
  "what’s up": "wassup",
  "that’s awesome": "that slaps",
  "amazing job": "chef’s kiss",
  "gossip": "tea",
  "tell me the gossip": "spill the tea",
  "not interested": "pass",
  "very tired": "dead",
  "i’m tired": "i’m dead",
  "i’m confused": "i’m lost",
  "i’m angry": "i’m salty",
  "i’m excited": "i’m hyped",
  "i’m embarrassed": "i’m cringing",
  "he is cool": "he’s a vibe",
  "she is cool": "she’s a vibe",
  "they are cool": "they’re a whole vibe"
};
const genZReplies = [
   "fr fr 😭",
  "no cap 💯",
  "u wild for that 😂",
  "lowkey feel that tho 😩",
  "not u saying that 😭",
  "it's giving ✨main character✨",
  "periodt 💅",
  "that’s so valid 🔥",
  "vibe check passed 💯",
  "mood literally 💀",
  "say less 👌",
  "go off bestie 🔥",
  "don’t play wit it 💅",
  "caught in 4k 📸",
  "ur so real for that 😤",
  "deadass 😭",
  "ok slay 💃",
  "sending good vibes only ✨",
  "spill the tea sis ☕👀",
  "that’s a big yikes 🚩",
  "you ate that up 😮‍💨",
  "i'm screaming 😂",
  "you snapped 🔥",
  "life is not giving rn 😩",
  "stay delulu 🤪",
  "ur not wrong bestie 💁‍♀️",
  "literal icon 💅",
  "caught lacking 😶‍🌫️",
  "bet 🤙",
  "this ain’t it chief 😬",
  "get that bag 💼💸",
  "so done rn 🙄",
  "slaps hard fr 🔥",
  "big mood 🧍",
  "touch grass 🌱",
  "u finna cry or nah? 😭",
  "ur built diff 😤",
  "pls 😭😭",
  "imma manifest that ✨",
  "say it louder for the ppl in back 🔊",
  "i can't even rn 🧠❌",
  "ur brain must be on airplane mode ✈️",
  "we do a lil trolling 😈",
  "ok boomer 🙄",
  "he ate and left no crumbs 🍽️",
  "feelin cute might ghost later 💅",
  "that’s so ick 🚩",
  "flexin on the haters 😎",
  "u valid af 😌",
  "pls get a grip 🫠",
  "heard u loud and clear 📢",
  "try again but slay this time ✨",
  "you're giving ✨chaotic energy✨",
  "ur in ur flop era 🥲",
  "new phone who dis? 📱",
  "nah fam 😵‍💫",
  "ur cooked 💀",
  "drop the skincare routine 🧴",
  "literally shaking rn 😭",
  "this is ur villain origin story 😈",
  "ok but like, facts 🫶"
];


// Utility to preserve punctuation & capitalization
function replaceSmart(text, dictionary) {
  // Sort keys by length (longest first) to match phrases first
  const sortedKeys = Object.keys(dictionary).sort((a, b) => b.length - a.length);
  let result = text;
 


  sortedKeys.forEach(key => {
    const regex = new RegExp(`\\b${key}\\b`, 'gi');
    result = result.replace(regex, match => {
      const replacement = dictionary[key.toLowerCase()];
      // Preserve case
      if (match[0] === match[0].toUpperCase()) {
        return replacement.charAt(0).toUpperCase() + replacement.slice(1);
      } else {
        return replacement;
      }
    });
  });

  return result;
}
 function getRandomGenZReply() {
  const index = Math.floor(Math.random() * genZReplies.length);
  return genZReplies[index];
}

function toGenZ() {
  let input = document.getElementById("inputText").value;
  let output = replaceSmart(input, genZDictionary);
  document.getElementById("outputText").value = output;
}
function genZAutoReply() {
  const inputText = document.getElementById("inputText").value.trim();
  if (inputText === "") {
    alert("Type something first!");
    return;
  }

  const reply = getRandomGenZReply();
  document.getElementById("outputText").value = reply;
}
function genZSmartReply(input) {
  if (input.includes("sad") || input.includes("depressed") || input.includes("down")) {
    return "stay strong fam 💪💖 u got this, sending virtual hugs ✨";
  } else if (input.includes("happy") || input.includes("yay")) {
    return "okayy pop off ✨ go off queen/king 💃🕺";
  }
  return getRandomGenZReply();
}


function toFormal() {
  let input = document.getElementById("inputText").value;
  const formalDictionary = {};
  for (let key in genZDictionary) {
    formalDictionary[genZDictionary[key]] = key;
  }
  let output = replaceSmart(input, formalDictionary);
  document.getElementById("outputText").value = output;
}
