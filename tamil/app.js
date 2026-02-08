const PHRASE_BANK = [
  {
    actionId: "come_here",
    englishPositive: "Come here",
    englishNegative: "Don't come here",
    forms: {
      respectful: {
        positive: { tamil: "இங்க வாங்க", roman: "Inga vaanga" },
        negative: { tamil: "இங்க வராதீங்க", roman: "Inga varaadheenga" }
      },
      casual: {
        positive: { tamil: "இங்க வா", roman: "Inga vaa" },
        negative: { tamil: "இங்க வராதே", roman: "Inga varaadhe" }
      }
    }
  },
  {
    actionId: "sit_down",
    englishPositive: "Sit down",
    englishNegative: "Don't sit down",
    forms: {
      respectful: {
        positive: { tamil: "உக்காருங்க", roman: "Ukkaarunga" },
        negative: { tamil: "உக்காராதீங்க", roman: "Ukkaaraadheenga" }
      },
      casual: {
        positive: { tamil: "உக்காரு", roman: "Ukkaaru" },
        negative: { tamil: "உக்காராதே", roman: "Ukkaaraadhe" }
      }
    }
  },
  {
    actionId: "stand_up",
    englishPositive: "Stand up",
    englishNegative: "Don't stand up",
    forms: {
      respectful: {
        positive: { tamil: "எழுந்திருங்க", roman: "Ezhundhirunga" },
        negative: { tamil: "எழுந்திருக்காதீங்க", roman: "Ezhundhirukkaadheenga" }
      },
      casual: {
        positive: { tamil: "எழுந்திரு", roman: "Ezhundhiru" },
        negative: { tamil: "எழுந்திருக்காதே", roman: "Ezhundhirukkaadhe" }
      }
    }
  },
  {
    actionId: "listen",
    englishPositive: "Listen",
    englishNegative: "Don't listen",
    forms: {
      respectful: {
        positive: { tamil: "கேளுங்க", roman: "Kelunga" },
        negative: { tamil: "கேக்காதீங்க", roman: "Kekkaadheenga" }
      },
      casual: {
        positive: { tamil: "கேளு", roman: "Kaelu / Kaleh" },
        negative: { tamil: "கேக்காதே", roman: "Kekkaadhe" }
      }
    }
  },
  {
    actionId: "look_here",
    englishPositive: "Look here",
    englishNegative: "Don't look here",
    forms: {
      respectful: {
        positive: { tamil: "இங்க பாருங்க", roman: "Inga paarunga" },
        negative: { tamil: "இங்க பார்க்காதீங்க", roman: "Inga paarkaadheenga" }
      },
      casual: {
        positive: { tamil: "இங்க பார்", roman: "Inga paar" },
        negative: { tamil: "இங்க பார்க்காதே", roman: "Inga paarkaadhe" }
      }
    }
  },
  {
    actionId: "read_this",
    englishPositive: "Read this",
    englishNegative: "Don't read this",
    forms: {
      respectful: {
        positive: { tamil: "இதை படிங்க", roman: "Idhai padinga" },
        negative: { tamil: "இதை படிக்காதீங்க", roman: "Idhai padikkaadheenga" }
      },
      casual: {
        positive: { tamil: "இதை படி", roman: "Idhai padi" },
        negative: { tamil: "இதை படிக்காதே", roman: "Idhai padikkaadhe" }
      }
    }
  },
  {
    actionId: "write_this",
    englishPositive: "Write this",
    englishNegative: "Don't write this",
    forms: {
      respectful: {
        positive: { tamil: "இதை எழுதுங்க", roman: "Idhai ezhudhunga" },
        negative: { tamil: "இதை எழுதாதீங்க", roman: "Idhai ezhudhaadheenga" }
      },
      casual: {
        positive: { tamil: "இதை எழுது", roman: "Idhai ezhuthu" },
        negative: { tamil: "இதை எழுதாதே", roman: "Idhai ezhudhaadhe" }
      }
    }
  },
  {
    actionId: "open_door",
    englishPositive: "Open the door",
    englishNegative: "Don't open the door",
    forms: {
      respectful: {
        positive: { tamil: "கதவை திறிங்க", roman: "Kathavai thiringa" },
        negative: { tamil: "கதவை திறக்காதீங்க", roman: "Kathavai thirakkaadheenga" }
      },
      casual: {
        positive: { tamil: "கதவை திற", roman: "Kathavai thira" },
        negative: { tamil: "கதவை திறக்காதே", roman: "Kathavai thirakkaadhe" }
      }
    }
  },
  {
    actionId: "close_door",
    englishPositive: "Close the door",
    englishNegative: "Don't close the door",
    forms: {
      respectful: {
        positive: { tamil: "கதவை மூடுங்க", roman: "Kathavai moodunga" },
        negative: { tamil: "கதவை மூடாதீங்க", roman: "Kathavai moodaadheenga" }
      },
      casual: {
        positive: { tamil: "கதவை மூடு", roman: "Kathavai moodu" },
        negative: { tamil: "கதவை மூடாதே", roman: "Kathavai moodaadhe" }
      }
    }
  },
  {
    actionId: "drink_water",
    englishPositive: "Drink water",
    englishNegative: "Don't drink water",
    forms: {
      respectful: {
        positive: { tamil: "தண்ணி குடிங்க", roman: "Thanni kudinga" },
        negative: { tamil: "தண்ணி குடிக்காதீங்க", roman: "Thanni kudikkaadheenga" }
      },
      casual: {
        positive: { tamil: "தண்ணி குடி", roman: "Thanni kudi" },
        negative: { tamil: "தண்ணி குடிக்காதே", roman: "Thanni kudikkaadhe" }
      }
    }
  },
  {
    actionId: "eat_food",
    englishPositive: "Eat your food",
    englishNegative: "Don't eat your food",
    forms: {
      respectful: {
        positive: { tamil: "சாப்பாடு சாப்பிடுங்க", roman: "Saapadu saapidunga" },
        negative: { tamil: "சாப்பாடு சாப்பிடாதீங்க", roman: "Saapadu saapidaadheenga" }
      },
      casual: {
        positive: { tamil: "சாப்பாடு சாப்பிடு", roman: "Saapadu saapidu" },
        negative: { tamil: "சாப்பாடு சாப்பிடாதே", roman: "Saapadu saapidaadhe" }
      }
    }
  },
  {
    actionId: "wait",
    englishPositive: "Wait a minute",
    englishNegative: "Don't wait",
    forms: {
      respectful: {
        positive: { tamil: "ஒரு நிமிஷம் நில்லுங்க", roman: "Oru nimisham nillunga" },
        negative: { tamil: "நிக்காதீங்க", roman: "Nikkaadheenga" }
      },
      casual: {
        positive: { tamil: "ஒரு நிமிஷம் நில்லு", roman: "Oru nimisham nillu / Nileh" },
        negative: { tamil: "நிக்காதே", roman: "Nikkaadhe" }
      }
    }
  },
  {
    actionId: "come_quickly",
    englishPositive: "Come quickly",
    englishNegative: "Don't come quickly",
    forms: {
      respectful: {
        positive: { tamil: "சீக்கிரம் வாங்க", roman: "Seekkiram vaanga" },
        negative: { tamil: "சீக்கிரம் வராதீங்க", roman: "Seekkiram varaadheenga" }
      },
      casual: {
        positive: { tamil: "சீக்கிரம் வா", roman: "Seekkiram vaa" },
        negative: { tamil: "சீக்கிரம் வராதே", roman: "Seekkiram varaadhe" }
      }
    }
  },
  {
    actionId: "speak_slowly",
    englishPositive: "Speak slowly",
    englishNegative: "Don't speak slowly",
    forms: {
      respectful: {
        positive: { tamil: "மெதுவா பேசுங்க", roman: "Medhuvaa pesunga" },
        negative: { tamil: "மெதுவா பேசாதீங்க", roman: "Medhuvaa pesaadheenga" }
      },
      casual: {
        positive: { tamil: "மெதுவா பேசு", roman: "Medhuvaa pesu" },
        negative: { tamil: "மெதுவா பேசாதே", roman: "Medhuvaa pesaadhe" }
      }
    }
  },
  {
    actionId: "repeat_once",
    englishPositive: "Say that again",
    englishNegative: "Don't say that again",
    forms: {
      respectful: {
        positive: { tamil: "இன்னொரு தடவை சொல்லுங்க", roman: "Innoru thadavai sollunga" },
        negative: { tamil: "இன்னொரு தடவை சொல்லாதீங்க", roman: "Innoru thadavai sollaadheenga" }
      },
      casual: {
        positive: { tamil: "இன்னொரு தடவை சொல்", roman: "Innoru thadavai sol" },
        negative: { tamil: "இன்னொரு தடவை சொல்லாதே", roman: "Innoru thadavai sollaadhe" }
      }
    }
  },
  {
    actionId: "go_home",
    englishPositive: "Go home",
    englishNegative: "Don't go home",
    forms: {
      respectful: {
        positive: { tamil: "வீட்டுக்குப் போங்க", roman: "Veettukku ponga" },
        negative: { tamil: "வீட்டுக்குப் போகாதீங்க", roman: "Veettukku pogaadheenga" }
      },
      casual: {
        positive: { tamil: "வீட்டுக்குப் போ", roman: "Veettukku po" },
        negative: { tamil: "வீட்டுக்குப் போகாதே", roman: "Veettukku pogaadhe" }
      }
    }
  },
  {
    actionId: "start_now",
    englishPositive: "Start now",
    englishNegative: "Don't start now",
    forms: {
      respectful: {
        positive: { tamil: "இப்போ தொடங்குங்க", roman: "Ippo thodangunga" },
        negative: { tamil: "இப்போ தொடங்காதீங்க", roman: "Ippo thodangaadheenga" }
      },
      casual: {
        positive: { tamil: "இப்போ தொடங்கு", roman: "Ippo thodangu" },
        negative: { tamil: "இப்போ தொடங்காதே", roman: "Ippo thodangaadhe" }
      }
    }
  },
  {
    actionId: "stop_now",
    englishPositive: "Stop now",
    englishNegative: "Don't stop now",
    forms: {
      respectful: {
        positive: { tamil: "இப்போ நிறுத்துங்க", roman: "Ippo niruthunga" },
        negative: { tamil: "இப்போ நிறுத்தாதீங்க", roman: "Ippo niruthaadheenga" }
      },
      casual: {
        positive: { tamil: "இப்போ நிறுத்து", roman: "Ippo niruthu" },
        negative: { tamil: "இப்போ நிறுத்தாதே", roman: "Ippo niruthaadhe" }
      }
    }
  },
  {
    actionId: "touch_this",
    englishPositive: "Touch this",
    englishNegative: "Don't touch this",
    forms: {
      respectful: {
        positive: { tamil: "இதை தொட்டுங்க", roman: "Idhai thottunga" },
        negative: { tamil: "இதை தொட்டாதீங்க", roman: "Idhai thottaadheenga" }
      },
      casual: {
        positive: { tamil: "இதை தொட்டு", roman: "Idhai thottu" },
        negative: { tamil: "இதை தொட்டாதே", roman: "Idhai thottaadhe" }
      }
    }
  },
  {
    actionId: "wash_hands",
    englishPositive: "Wash your hands",
    englishNegative: "Don't wash your hands",
    forms: {
      respectful: {
        positive: { tamil: "கை கழுவுங்க", roman: "Kai kazhuvunga" },
        negative: { tamil: "கை கழுவாதீங்க", roman: "Kai kazhuvaadheenga" }
      },
      casual: {
        positive: { tamil: "கை கழுவு", roman: "Kai kazhuvu" },
        negative: { tamil: "கை கழுவாதே", roman: "Kai kazhuvaadhe" }
      }
    }
  },
  {
    actionId: "wash_face",
    englishPositive: "Wash your face",
    englishNegative: "Don't wash your face",
    forms: {
      respectful: {
        positive: { tamil: "முகம் கழுவுங்க", roman: "Mugam kazhuvunga" },
        negative: { tamil: "முகம் கழுவாதீங்க", roman: "Mugam kazhuvaadheenga" }
      },
      casual: {
        positive: { tamil: "முகம் கழுவு", roman: "Mugam kazhuvu" },
        negative: { tamil: "முகம் கழுவாதே", roman: "Mugam kazhuvaadhe" }
      }
    }
  },
  {
    actionId: "bring_book",
    englishPositive: "Bring the book",
    englishNegative: "Don't bring the book",
    forms: {
      respectful: {
        positive: { tamil: "புத்தகத்தை கொண்டு வாங்க", roman: "Puthagathai kondu vaanga" },
        negative: { tamil: "புத்தகத்தை கொண்டு வராதீங்க", roman: "Puthagathai kondu varaadheenga" }
      },
      casual: {
        positive: { tamil: "புத்தகத்தை கொண்டு வா", roman: "Puthagathai kondu vaa" },
        negative: { tamil: "புத்தகத்தை கொண்டு வராதே", roman: "Puthagathai kondu varaadhe" }
      }
    }
  },
  {
    actionId: "keep_quiet",
    englishPositive: "Be quiet",
    englishNegative: "Don't be quiet",
    forms: {
      respectful: {
        positive: { tamil: "அமைதியா இருங்க", roman: "Amaidhiyaa irunga" },
        negative: { tamil: "அமைதியா இருக்காதீங்க", roman: "Amaidhiyaa irukkaadheenga" }
      },
      casual: {
        positive: { tamil: "அமைதியா இரு", roman: "Amaidhiyaa iru" },
        negative: { tamil: "அமைதியா இருக்காதே", roman: "Amaidhiyaa irukkaadhe" }
      }
    }
  },
  {
    actionId: "switch_on_light",
    englishPositive: "Turn on the light",
    englishNegative: "Don't turn on the light",
    forms: {
      respectful: {
        positive: { tamil: "லைட்டை போடுங்க", roman: "Light-ai podunga" },
        negative: { tamil: "லைட்டை போடாதீங்க", roman: "Light-ai podaadheenga" }
      },
      casual: {
        positive: { tamil: "லைட்டை போடு", roman: "Light-ai podu" },
        negative: { tamil: "லைட்டை போடாதே", roman: "Light-ai podaadhe" }
      }
    }
  },
  {
    actionId: "switch_off_light",
    englishPositive: "Turn off the light",
    englishNegative: "Don't turn off the light",
    forms: {
      respectful: {
        positive: { tamil: "லைட்டை அணைங்க", roman: "Light-ai anainga" },
        negative: { tamil: "லைட்டை அணைக்காதீங்க", roman: "Light-ai anaikkaadheenga" }
      },
      casual: {
        positive: { tamil: "லைட்டை அணை", roman: "Light-ai anai" },
        negative: { tamil: "லைட்டை அணைக்காதே", roman: "Light-ai anaikkaadhe" }
      }
    }
  },
  {
    actionId: "open_window",
    englishPositive: "Open the window",
    englishNegative: "Don't open the window",
    forms: {
      respectful: {
        positive: { tamil: "ஜன்னலை திறிங்க", roman: "Jannalai thiringa" },
        negative: { tamil: "ஜன்னலை திறக்காதீங்க", roman: "Jannalai thirakkaadheenga" }
      },
      casual: {
        positive: { tamil: "ஜன்னலை திற", roman: "Jannalai thira" },
        negative: { tamil: "ஜன்னலை திறக்காதே", roman: "Jannalai thirakkaadhe" }
      }
    }
  },
  {
    actionId: "close_window",
    englishPositive: "Close the window",
    englishNegative: "Don't close the window",
    forms: {
      respectful: {
        positive: { tamil: "ஜன்னலை மூடுங்க", roman: "Jannalai moodunga" },
        negative: { tamil: "ஜன்னலை மூடாதீங்க", roman: "Jannalai moodaadheenga" }
      },
      casual: {
        positive: { tamil: "ஜன்னலை மூடு", roman: "Jannalai moodu" },
        negative: { tamil: "ஜன்னலை மூடாதே", roman: "Jannalai moodaadhe" }
      }
    }
  },
  {
    actionId: "wait_here",
    englishPositive: "Wait here",
    englishNegative: "Don't wait here",
    forms: {
      respectful: {
        positive: { tamil: "இங்க நில்லுங்க", roman: "Inga nillunga" },
        negative: { tamil: "இங்க நிக்காதீங்க", roman: "Inga nikkaadheenga" }
      },
      casual: {
        positive: { tamil: "இங்க நில்லு", roman: "Inga nillu" },
        negative: { tamil: "இங்க நிக்காதே", roman: "Inga nikkaadhe" }
      }
    }
  },
  {
    actionId: "come_inside",
    englishPositive: "Come inside",
    englishNegative: "Don't come inside",
    forms: {
      respectful: {
        positive: { tamil: "உள்ளே வாங்க", roman: "Ulle vaanga" },
        negative: { tamil: "உள்ளே வராதீங்க", roman: "Ulle varaadheenga" }
      },
      casual: {
        positive: { tamil: "உள்ளே வா", roman: "Ulle vaa" },
        negative: { tamil: "உள்ளே வராதே", roman: "Ulle varaadhe" }
      }
    }
  },
  {
    actionId: "go_outside",
    englishPositive: "Go outside",
    englishNegative: "Don't go outside",
    forms: {
      respectful: {
        positive: { tamil: "வெளியே போங்க", roman: "Veliye ponga" },
        negative: { tamil: "வெளியே போகாதீங்க", roman: "Veliye pogaadheenga" }
      },
      casual: {
        positive: { tamil: "வெளியே போ", roman: "Veliye po" },
        negative: { tamil: "வெளியே போகாதே", roman: "Veliye pogaadhe" }
      }
    }
  },
  {
    actionId: "hold_this",
    englishPositive: "Hold this",
    englishNegative: "Don't hold this",
    forms: {
      respectful: {
        positive: { tamil: "இதை பிடிங்க", roman: "Idhai pidinga" },
        negative: { tamil: "இதை பிடிக்காதீங்க", roman: "Idhai pidikkaadheenga" }
      },
      casual: {
        positive: { tamil: "இதை பிடி", roman: "Idhai pidi" },
        negative: { tamil: "இதை பிடிக்காதே", roman: "Idhai pidikkaadhe" }
      }
    }
  },
  {
    actionId: "leave_this",
    englishPositive: "Leave this",
    englishNegative: "Don't leave this",
    forms: {
      respectful: {
        positive: { tamil: "இதை விடுங்க", roman: "Idhai vidunga" },
        negative: { tamil: "இதை விடாதீங்க", roman: "Idhai vidaadheenga" }
      },
      casual: {
        positive: { tamil: "இதை விடு", roman: "Idhai vidu" },
        negative: { tamil: "இதை விடாதே", roman: "Idhai vidaadhe" }
      }
    }
  },
  {
    actionId: "call_me",
    englishPositive: "Call me",
    englishNegative: "Don't call me",
    forms: {
      respectful: {
        positive: { tamil: "என்னை கூப்பிடுங்க", roman: "Ennai koopidunga" },
        negative: { tamil: "என்னை கூப்பிடாதீங்க", roman: "Ennai koopidaadheenga" }
      },
      casual: {
        positive: { tamil: "என்னை கூப்பிடு", roman: "Ennai koopidu" },
        negative: { tamil: "என்னை கூப்பிடாதே", roman: "Ennai koopidaadhe" }
      }
    }
  },
  {
    actionId: "run",
    englishPositive: "Run",
    englishNegative: "Don't run",
    forms: {
      respectful: {
        positive: { tamil: "ஓடுங்க", roman: "Odunga" },
        negative: { tamil: "ஓடாதீங்க", roman: "Odaadheenga" }
      },
      casual: {
        positive: { tamil: "ஓடு", roman: "Odu" },
        negative: { tamil: "ஓடாதே", roman: "Odaadhe" }
      }
    }
  },
  {
    actionId: "walk_slowly",
    englishPositive: "Walk slowly",
    englishNegative: "Don't walk slowly",
    forms: {
      respectful: {
        positive: { tamil: "மெதுவா நடங்க", roman: "Medhuvaa nadanga" },
        negative: { tamil: "மெதுவா நடக்காதீங்க", roman: "Medhuvaa nadakkaadheenga" }
      },
      casual: {
        positive: { tamil: "மெதுவா நட", roman: "Medhuvaa nada" },
        negative: { tamil: "மெதுவா நடக்காதே", roman: "Medhuvaa nadakkaadhe" }
      }
    }
  },
  {
    actionId: "brush_teeth",
    englishPositive: "Brush your teeth",
    englishNegative: "Don't brush your teeth",
    forms: {
      respectful: {
        positive: { tamil: "பல்ல துலக்குங்க", roman: "Palla thulakkunga" },
        negative: { tamil: "பல்ல துலக்காதீங்க", roman: "Palla thulakkaadheenga" }
      },
      casual: {
        positive: { tamil: "பல்ல துலக்கு", roman: "Palla thulakku" },
        negative: { tamil: "பல்ல துலக்காதே", roman: "Palla thulakkaadhe" }
      }
    }
  },
  {
    actionId: "comb_hair",
    englishPositive: "Comb your hair",
    englishNegative: "Don't comb your hair",
    forms: {
      respectful: {
        positive: { tamil: "முடி சீவுங்க", roman: "Mudi seevunga" },
        negative: { tamil: "முடி சீவாதீங்க", roman: "Mudi seevaadheenga" }
      },
      casual: {
        positive: { tamil: "முடி சீவு", roman: "Mudi seevu" },
        negative: { tamil: "முடி சீவாதே", roman: "Mudi seevaadhe" }
      }
    }
  },
  {
    actionId: "wear_shoes",
    englishPositive: "Wear your shoes",
    englishNegative: "Don't wear your shoes",
    forms: {
      respectful: {
        positive: { tamil: "செருப்பு போடுங்க", roman: "Seruppu podunga" },
        negative: { tamil: "செருப்பு போடாதீங்க", roman: "Seruppu podaadheenga" }
      },
      casual: {
        positive: { tamil: "செருப்பு போடு", roman: "Seruppu podu" },
        negative: { tamil: "செருப்பு போடாதே", roman: "Seruppu podaadhe" }
      }
    }
  },
  {
    actionId: "remove_shoes",
    englishPositive: "Remove your shoes",
    englishNegative: "Don't remove your shoes",
    forms: {
      respectful: {
        positive: { tamil: "செருப்பு கழற்றுங்க", roman: "Seruppu kazhatrunga" },
        negative: { tamil: "செருப்பு கழற்றாதீங்க", roman: "Seruppu kazhatraadheenga" }
      },
      casual: {
        positive: { tamil: "செருப்பு கழற்று", roman: "Seruppu kazhatru" },
        negative: { tamil: "செருப்பு கழற்றாதே", roman: "Seruppu kazhatraadhe" }
      }
    }
  },
  {
    actionId: "wear_mask",
    englishPositive: "Wear your mask",
    englishNegative: "Don't wear your mask",
    forms: {
      respectful: {
        positive: { tamil: "மாஸ்க் போடுங்க", roman: "Mask podunga" },
        negative: { tamil: "மாஸ்க் போடாதீங்க", roman: "Mask podaadheenga" }
      },
      casual: {
        positive: { tamil: "மாஸ்க் போடு", roman: "Mask podu" },
        negative: { tamil: "மாஸ்க் போடாதே", roman: "Mask podaadhe" }
      }
    }
  },
  {
    actionId: "remove_mask",
    englishPositive: "Remove your mask",
    englishNegative: "Don't remove your mask",
    forms: {
      respectful: {
        positive: { tamil: "மாஸ்க் கழற்றுங்க", roman: "Mask kazhatrunga" },
        negative: { tamil: "மாஸ்க் கழற்றாதீங்க", roman: "Mask kazhatraadheenga" }
      },
      casual: {
        positive: { tamil: "மாஸ்க் கழற்று", roman: "Mask kazhatru" },
        negative: { tamil: "மாஸ்க் கழற்றாதே", roman: "Mask kazhatraadhe" }
      }
    }
  },
  {
    actionId: "open_book",
    englishPositive: "Open the book",
    englishNegative: "Don't open the book",
    forms: {
      respectful: {
        positive: { tamil: "புத்தகம் திறிங்க", roman: "Puthagam thiringa" },
        negative: { tamil: "புத்தகம் திறக்காதீங்க", roman: "Puthagam thirakkaadheenga" }
      },
      casual: {
        positive: { tamil: "புத்தகம் திற", roman: "Puthagam thira" },
        negative: { tamil: "புத்தகம் திறக்காதே", roman: "Puthagam thirakkaadhe" }
      }
    }
  },
  {
    actionId: "close_book",
    englishPositive: "Close the book",
    englishNegative: "Don't close the book",
    forms: {
      respectful: {
        positive: { tamil: "புத்தகம் மூடுங்க", roman: "Puthagam moodunga" },
        negative: { tamil: "புத்தகம் மூடாதீங்க", roman: "Puthagam moodaadheenga" }
      },
      casual: {
        positive: { tamil: "புத்தகம் மூடு", roman: "Puthagam moodu" },
        negative: { tamil: "புத்தகம் மூடாதே", roman: "Puthagam moodaadhe" }
      }
    }
  },
  {
    actionId: "do_homework",
    englishPositive: "Do your homework",
    englishNegative: "Don't do your homework",
    forms: {
      respectful: {
        positive: { tamil: "வீட்டுப்பாடம் செய்யுங்க", roman: "Veettupaadam seiyunga" },
        negative: { tamil: "வீட்டுப்பாடம் செய்யாதீங்க", roman: "Veettupaadam seiyaadheenga" }
      },
      casual: {
        positive: { tamil: "வீட்டுப்பாடம் செய்", roman: "Veettupaadam sei" },
        negative: { tamil: "வீட்டுப்பாடம் செய்யாதே", roman: "Veettupaadam seiyaadhe" }
      }
    }
  },
  {
    actionId: "finish_homework",
    englishPositive: "Finish your homework",
    englishNegative: "Don't finish your homework",
    forms: {
      respectful: {
        positive: { tamil: "வீட்டுப்பாடம் முடிங்க", roman: "Veettupaadam mudinga" },
        negative: { tamil: "வீட்டுப்பாடம் முடிக்காதீங்க", roman: "Veettupaadam mudikkaadheenga" }
      },
      casual: {
        positive: { tamil: "வீட்டுப்பாடம் முடி", roman: "Veettupaadam mudi" },
        negative: { tamil: "வீட்டுப்பாடம் முடிக்காதே", roman: "Veettupaadam mudikkaadhe" }
      }
    }
  },
  {
    actionId: "answer_question",
    englishPositive: "Answer the question",
    englishNegative: "Don't answer the question",
    forms: {
      respectful: {
        positive: { tamil: "பதில் சொல்லுங்க", roman: "Badhil sollunga" },
        negative: { tamil: "பதில் சொல்லாதீங்க", roman: "Badhil sollaadheenga" }
      },
      casual: {
        positive: { tamil: "பதில் சொல்", roman: "Badhil sol" },
        negative: { tamil: "பதில் சொல்லாதே", roman: "Badhil sollaadhe" }
      }
    }
  },
  {
    actionId: "ask_question",
    englishPositive: "Ask a question",
    englishNegative: "Don't ask a question",
    forms: {
      respectful: {
        positive: { tamil: "கேள்வி கேளுங்க", roman: "Kelvi kelunga" },
        negative: { tamil: "கேள்வி கேக்காதீங்க", roman: "Kelvi kekkaadheenga" }
      },
      casual: {
        positive: { tamil: "கேள்வி கேள்", roman: "Kelvi kel" },
        negative: { tamil: "கேள்வி கேக்காதே", roman: "Kelvi kekkaadhe" }
      }
    }
  },
  {
    actionId: "raise_hand",
    englishPositive: "Raise your hand",
    englishNegative: "Don't raise your hand",
    forms: {
      respectful: {
        positive: { tamil: "கை தூக்குங்க", roman: "Kai thookkunga" },
        negative: { tamil: "கை தூக்காதீங்க", roman: "Kai thookkaadheenga" }
      },
      casual: {
        positive: { tamil: "கை தூக்கு", roman: "Kai thookku" },
        negative: { tamil: "கை தூக்காதே", roman: "Kai thookkaadhe" }
      }
    }
  },
  {
    actionId: "lower_hand",
    englishPositive: "Put your hand down",
    englishNegative: "Don't put your hand down",
    forms: {
      respectful: {
        positive: { tamil: "கை கீழே வையுங்க", roman: "Kai keela vaiyunga" },
        negative: { tamil: "கை கீழே வைக்காதீங்க", roman: "Kai keela vaikkaadheenga" }
      },
      casual: {
        positive: { tamil: "கை கீழே வை", roman: "Kai keela vai" },
        negative: { tamil: "கை கீழே வைக்காதே", roman: "Kai keela vaikkaadhe" }
      }
    }
  },
  {
    actionId: "clap_hands",
    englishPositive: "Clap your hands",
    englishNegative: "Don't clap your hands",
    forms: {
      respectful: {
        positive: { tamil: "கை தட்டுங்க", roman: "Kai thattunga" },
        negative: { tamil: "கை தட்டாதீங்க", roman: "Kai thattaadheenga" }
      },
      casual: {
        positive: { tamil: "கை தட்டு", roman: "Kai thattu" },
        negative: { tamil: "கை தட்டாதே", roman: "Kai thattaadhe" }
      }
    }
  },
  {
    actionId: "smile",
    englishPositive: "Smile",
    englishNegative: "Don't smile",
    forms: {
      respectful: {
        positive: { tamil: "சிரியுங்க", roman: "Siriyunga" },
        negative: { tamil: "சிரிக்காதீங்க", roman: "Sirikkaadheenga" }
      },
      casual: {
        positive: { tamil: "சிரி", roman: "Siri" },
        negative: { tamil: "சிரிக்காதே", roman: "Sirikkaadhe" }
      }
    }
  },
  {
    actionId: "sit_there",
    englishPositive: "Sit there",
    englishNegative: "Don't sit there",
    forms: {
      respectful: {
        positive: { tamil: "அங்க உக்காருங்க", roman: "Anga ukkaarunga" },
        negative: { tamil: "அங்க உக்காராதீங்க", roman: "Anga ukkaaraadheenga" }
      },
      casual: {
        positive: { tamil: "அங்க உக்காரு", roman: "Anga ukkaaru" },
        negative: { tamil: "அங்க உக்காராதே", roman: "Anga ukkaaraadhe" }
      }
    }
  },
  {
    actionId: "come_back",
    englishPositive: "Come back",
    englishNegative: "Don't come back",
    forms: {
      respectful: {
        positive: { tamil: "திரும்பி வாங்க", roman: "Thirumbi vaanga" },
        negative: { tamil: "திரும்பி வராதீங்க", roman: "Thirumbi varaadheenga" }
      },
      casual: {
        positive: { tamil: "திரும்பி வா", roman: "Thirumbi vaa" },
        negative: { tamil: "திரும்பி வராதே", roman: "Thirumbi varaadhe" }
      }
    }
  },
  {
    actionId: "go_upstairs",
    englishPositive: "Go upstairs",
    englishNegative: "Don't go upstairs",
    forms: {
      respectful: {
        positive: { tamil: "மேல போங்க", roman: "Mela ponga" },
        negative: { tamil: "மேல போகாதீங்க", roman: "Mela pogaadheenga" }
      },
      casual: {
        positive: { tamil: "மேல போ", roman: "Mela po" },
        negative: { tamil: "மேல போகாதே", roman: "Mela pogaadhe" }
      }
    }
  },
  {
    actionId: "go_downstairs",
    englishPositive: "Go downstairs",
    englishNegative: "Don't go downstairs",
    forms: {
      respectful: {
        positive: { tamil: "கீழே போங்க", roman: "Keela ponga" },
        negative: { tamil: "கீழே போகாதீங்க", roman: "Keela pogaadheenga" }
      },
      casual: {
        positive: { tamil: "கீழே போ", roman: "Keela po" },
        negative: { tamil: "கீழே போகாதே", roman: "Keela pogaadhe" }
      }
    }
  },
  {
    actionId: "drink_milk",
    englishPositive: "Drink milk",
    englishNegative: "Don't drink milk",
    forms: {
      respectful: {
        positive: { tamil: "பால் குடிங்க", roman: "Paal kudinga" },
        negative: { tamil: "பால் குடிக்காதீங்க", roman: "Paal kudikkaadheenga" }
      },
      casual: {
        positive: { tamil: "பால் குடி", roman: "Paal kudi" },
        negative: { tamil: "பால் குடிக்காதே", roman: "Paal kudikkaadhe" }
      }
    }
  },
  {
    actionId: "drink_juice",
    englishPositive: "Drink juice",
    englishNegative: "Don't drink juice",
    forms: {
      respectful: {
        positive: { tamil: "ஜூஸ் குடிங்க", roman: "Juice kudinga" },
        negative: { tamil: "ஜூஸ் குடிக்காதீங்க", roman: "Juice kudikkaadheenga" }
      },
      casual: {
        positive: { tamil: "ஜூஸ் குடி", roman: "Juice kudi" },
        negative: { tamil: "ஜூஸ் குடிக்காதே", roman: "Juice kudikkaadhe" }
      }
    }
  },
  {
    actionId: "bring_bottle",
    englishPositive: "Bring the bottle",
    englishNegative: "Don't bring the bottle",
    forms: {
      respectful: {
        positive: { tamil: "பாட்டிலை கொண்டு வாங்க", roman: "Paattilai kondu vaanga" },
        negative: { tamil: "பாட்டிலை கொண்டு வராதீங்க", roman: "Paattilai kondu varaadheenga" }
      },
      casual: {
        positive: { tamil: "பாட்டிலை கொண்டு வா", roman: "Paattilai kondu vaa" },
        negative: { tamil: "பாட்டிலை கொண்டு வராதே", roman: "Paattilai kondu varaadhe" }
      }
    }
  },
  {
    actionId: "keep_bottle",
    englishPositive: "Keep the bottle here",
    englishNegative: "Don't keep the bottle here",
    forms: {
      respectful: {
        positive: { tamil: "பாட்டிலை இங்க வையுங்க", roman: "Paattilai inga vaiyunga" },
        negative: { tamil: "பாட்டிலை இங்க வைக்காதீங்க", roman: "Paattilai inga vaikkaadheenga" }
      },
      casual: {
        positive: { tamil: "பாட்டிலை இங்க வை", roman: "Paattilai inga vai" },
        negative: { tamil: "பாட்டிலை இங்க வைக்காதே", roman: "Paattilai inga vaikkaadhe" }
      }
    }
  },
  {
    actionId: "clean_table",
    englishPositive: "Clean the table",
    englishNegative: "Don't clean the table",
    forms: {
      respectful: {
        positive: { tamil: "மேசை சுத்தம் பண்ணுங்க", roman: "Mesai sutham pannunga" },
        negative: { tamil: "மேசை சுத்தம் பண்ணாதீங்க", roman: "Mesai sutham pannaadheenga" }
      },
      casual: {
        positive: { tamil: "மேசை சுத்தம் பண்ணு", roman: "Mesai sutham pannu" },
        negative: { tamil: "மேசை சுத்தம் பண்ணாதே", roman: "Mesai sutham pannaadhe" }
      }
    }
  },
  {
    actionId: "clean_room",
    englishPositive: "Clean the room",
    englishNegative: "Don't clean the room",
    forms: {
      respectful: {
        positive: { tamil: "அறை சுத்தம் பண்ணுங்க", roman: "Arai sutham pannunga" },
        negative: { tamil: "அறை சுத்தம் பண்ணாதீங்க", roman: "Arai sutham pannaadheenga" }
      },
      casual: {
        positive: { tamil: "அறை சுத்தம் பண்ணு", roman: "Arai sutham pannu" },
        negative: { tamil: "அறை சுத்தம் பண்ணாதே", roman: "Arai sutham pannaadhe" }
      }
    }
  },
  {
    actionId: "sweep_floor",
    englishPositive: "Sweep the floor",
    englishNegative: "Don't sweep the floor",
    forms: {
      respectful: {
        positive: { tamil: "தரை கூட்டுங்க", roman: "Tharai koottunga" },
        negative: { tamil: "தரை கூட்டாதீங்க", roman: "Tharai koottaadheenga" }
      },
      casual: {
        positive: { tamil: "தரை கூட்டு", roman: "Tharai koottu" },
        negative: { tamil: "தரை கூட்டாதே", roman: "Tharai koottaadhe" }
      }
    }
  },
  {
    actionId: "mop_floor",
    englishPositive: "Mop the floor",
    englishNegative: "Don't mop the floor",
    forms: {
      respectful: {
        positive: { tamil: "தரை துடைங்க", roman: "Tharai thudainga" },
        negative: { tamil: "தரை துடைக்காதீங்க", roman: "Tharai thudaikkaadheenga" }
      },
      casual: {
        positive: { tamil: "தரை துடை", roman: "Tharai thudai" },
        negative: { tamil: "தரை துடைக்காதே", roman: "Tharai thudaikkaadhe" }
      }
    }
  },
  {
    actionId: "fold_clothes",
    englishPositive: "Fold the clothes",
    englishNegative: "Don't fold the clothes",
    forms: {
      respectful: {
        positive: { tamil: "துணி மடிக்குங்க", roman: "Thuni madikkunga" },
        negative: { tamil: "துணி மடிக்காதீங்க", roman: "Thuni madikkaadheenga" }
      },
      casual: {
        positive: { tamil: "துணி மடிக்கு", roman: "Thuni madikku" },
        negative: { tamil: "துணி மடிக்காதே", roman: "Thuni madikkaadhe" }
      }
    }
  },
  {
    actionId: "open_gate",
    englishPositive: "Open the gate",
    englishNegative: "Don't open the gate",
    forms: {
      respectful: {
        positive: { tamil: "கேட்டை திறிங்க", roman: "Gate-ai thiringa" },
        negative: { tamil: "கேட்டை திறக்காதீங்க", roman: "Gate-ai thirakkaadheenga" }
      },
      casual: {
        positive: { tamil: "கேட்டை திற", roman: "Gate-ai thira" },
        negative: { tamil: "கேட்டை திறக்காதே", roman: "Gate-ai thirakkaadhe" }
      }
    }
  },
  {
    actionId: "close_gate",
    englishPositive: "Close the gate",
    englishNegative: "Don't close the gate",
    forms: {
      respectful: {
        positive: { tamil: "கேட்டை மூடுங்க", roman: "Gate-ai moodunga" },
        negative: { tamil: "கேட்டை மூடாதீங்க", roman: "Gate-ai moodaadheenga" }
      },
      casual: {
        positive: { tamil: "கேட்டை மூடு", roman: "Gate-ai moodu" },
        negative: { tamil: "கேட்டை மூடாதே", roman: "Gate-ai moodaadhe" }
      }
    }
  },
  {
    actionId: "wait_outside",
    englishPositive: "Wait outside",
    englishNegative: "Don't wait outside",
    forms: {
      respectful: {
        positive: { tamil: "வெளியே நில்லுங்க", roman: "Veliye nillunga" },
        negative: { tamil: "வெளியே நிக்காதீங்க", roman: "Veliye nikkaadheenga" }
      },
      casual: {
        positive: { tamil: "வெளியே நில்லு", roman: "Veliye nillu" },
        negative: { tamil: "வெளியே நிக்காதே", roman: "Veliye nikkaadhe" }
      }
    }
  },
  {
    actionId: "turn_left",
    englishPositive: "Turn left",
    englishNegative: "Don't turn left",
    forms: {
      respectful: {
        positive: { tamil: "இடது பக்கம் திரும்புங்க", roman: "Idathu pakkam thirumbunga" },
        negative: { tamil: "இடது பக்கம் திரும்பாதீங்க", roman: "Idathu pakkam thirumbaadheenga" }
      },
      casual: {
        positive: { tamil: "இடது பக்கம் திரும்பு", roman: "Idathu pakkam thirumbu" },
        negative: { tamil: "இடது பக்கம் திரும்பாதே", roman: "Idathu pakkam thirumbaadhe" }
      }
    }
  },
  {
    actionId: "turn_right",
    englishPositive: "Turn right",
    englishNegative: "Don't turn right",
    forms: {
      respectful: {
        positive: { tamil: "வலது பக்கம் திரும்புங்க", roman: "Valathu pakkam thirumbunga" },
        negative: { tamil: "வலது பக்கம் திரும்பாதீங்க", roman: "Valathu pakkam thirumbaadheenga" }
      },
      casual: {
        positive: { tamil: "வலது பக்கம் திரும்பு", roman: "Valathu pakkam thirumbu" },
        negative: { tamil: "வலது பக்கம் திரும்பாதே", roman: "Valathu pakkam thirumbaadhe" }
      }
    }
  },
  {
    actionId: "speak_loudly",
    englishPositive: "Speak loudly",
    englishNegative: "Don't speak loudly",
    forms: {
      respectful: {
        positive: { tamil: "சத்தமா பேசுங்க", roman: "Saththama pesunga" },
        negative: { tamil: "சத்தமா பேசாதீங்க", roman: "Saththama pesaadheenga" }
      },
      casual: {
        positive: { tamil: "சத்தமா பேசு", roman: "Saththama pesu" },
        negative: { tamil: "சத்தமா பேசாதே", roman: "Saththama pesaadhe" }
      }
    }
  },
  {
    actionId: "stop_talking",
    englishPositive: "Stop talking",
    englishNegative: "Don't stop talking",
    forms: {
      respectful: {
        positive: { tamil: "பேசுறதை நிறுத்துங்க", roman: "Pesuradhai niruthunga" },
        negative: { tamil: "பேசுறதை நிறுத்தாதீங்க", roman: "Pesuradhai niruthaadheenga" }
      },
      casual: {
        positive: { tamil: "பேசுறதை நிறுத்து", roman: "Pesuradhai niruthu" },
        negative: { tamil: "பேசுறதை நிறுத்தாதே", roman: "Pesuradhai niruthaadhe" }
      }
    }
  },
  {
    actionId: "look_up",
    englishPositive: "Look up",
    englishNegative: "Don't look up",
    forms: {
      respectful: {
        positive: { tamil: "மேல பாருங்க", roman: "Mela paarunga" },
        negative: { tamil: "மேல பார்க்காதீங்க", roman: "Mela paarkaadheenga" }
      },
      casual: {
        positive: { tamil: "மேல பார்", roman: "Mela paar" },
        negative: { tamil: "மேல பார்க்காதே", roman: "Mela paarkaadhe" }
      }
    }
  },
  {
    actionId: "look_down",
    englishPositive: "Look down",
    englishNegative: "Don't look down",
    forms: {
      respectful: {
        positive: { tamil: "கீழே பாருங்க", roman: "Keela paarunga" },
        negative: { tamil: "கீழே பார்க்காதீங்க", roman: "Keela paarkaadheenga" }
      },
      casual: {
        positive: { tamil: "கீழே பார்", roman: "Keela paar" },
        negative: { tamil: "கீழே பார்க்காதே", roman: "Keela paarkaadhe" }
      }
    }
  },
  {
    actionId: "give_this",
    englishPositive: "Give this",
    englishNegative: "Don't give this",
    forms: {
      respectful: {
        positive: { tamil: "இதை கொடுங்க", roman: "Idhai kodunga" },
        negative: { tamil: "இதை கொடுக்காதீங்க", roman: "Idhai kodukkaadheenga" }
      },
      casual: {
        positive: { tamil: "இதை கொடு", roman: "Idhai kodu" },
        negative: { tamil: "இதை கொடுக்காதே", roman: "Idhai kodukkaadhe" }
      }
    }
  },
  {
    actionId: "take_that",
    englishPositive: "Take that",
    englishNegative: "Don't take that",
    forms: {
      respectful: {
        positive: { tamil: "அதை எடுங்க", roman: "Adhai edunga" },
        negative: { tamil: "அதை எடுக்காதீங்க", roman: "Adhai edukkaadheenga" }
      },
      casual: {
        positive: { tamil: "அதை எடு", roman: "Adhai edu" },
        negative: { tamil: "அதை எடுக்காதே", roman: "Adhai edukkaadhe" }
      }
    }
  },
  {
    actionId: "move_aside",
    englishPositive: "Move aside a little",
    englishNegative: "Don't move aside",
    forms: {
      respectful: {
        positive: { tamil: "கொஞ்சம் ஓரமா நகருங்க", roman: "Konjam orama nagarunga" },
        negative: { tamil: "கொஞ்சம் ஓரமா நகராதீங்க", roman: "Konjam orama nagaraadheenga" }
      },
      casual: {
        positive: { tamil: "கொஞ்சம் ஓரமா நகர்", roman: "Konjam orama nagar" },
        negative: { tamil: "கொஞ்சம் ஓரமா நகராதே", roman: "Konjam orama nagaraadhe" }
      }
    }
  }
];

const DB_NAME = "tamil-erode-accent-db";
const STORE_NAME = "clips";
const DB_VERSION = 1;

const RESPECT_MODE_KEY = "tamil-quiz-respect-mode";
const POLARITY_MODE_KEY = "tamil-quiz-polarity-mode";
const UI_MODE_KEY = "tamil-quiz-ui-mode";
const TTS_MODE_KEY = "tamil-quiz-tts-mode";
const OPENAI_KEY_STORAGE_KEY = "tamil-quiz-openai-key";
const CLOUD_MODEL_STORAGE_KEY = "tamil-quiz-cloud-model";
const CLOUD_VOICE_STORAGE_KEY = "tamil-quiz-cloud-voice";
const CLOUD_INSTRUCTIONS_STORAGE_KEY = "tamil-quiz-cloud-instructions";

const RESPECT_MODES = {
  RESPECTFUL: "respectful",
  CASUAL: "casual",
  MIXED: "mixed"
};

const POLARITY_MODES = {
  POSITIVE: "positive",
  NEGATIVE: "negative",
  MIXED: "mixed"
};

const UI_MODES = {
  STANDARD: "standard",
  LOW_VISION: "low_vision",
  TEACHER_RECORDING: "teacher_recording"
};

const UI_MODE_ORDER = [UI_MODES.STANDARD, UI_MODES.LOW_VISION, UI_MODES.TEACHER_RECORDING];

const RESPECT_ORDER = [RESPECT_MODES.RESPECTFUL, RESPECT_MODES.CASUAL, RESPECT_MODES.MIXED];
const POLARITY_ORDER = [POLARITY_MODES.MIXED, POLARITY_MODES.POSITIVE, POLARITY_MODES.NEGATIVE];
const DEFAULT_RESPECT_MODE = RESPECT_MODES.RESPECTFUL;

const TTS_MODES = {
  NONE: "none",
  MAC_BASIC: "mac_basic",
  CLOUD_PLUS: "cloud_plus"
};

const TTS_ORDER = [TTS_MODES.NONE, TTS_MODES.MAC_BASIC, TTS_MODES.CLOUD_PLUS];

const DEFAULT_CLOUD_TTS = {
  model: "gpt-4o-mini-tts",
  voice: "alloy",
  instructions:
    "Speak Tamil in natural Kongu Tamil (Erode side) accent. Keep tone warm, clear, and child-friendly."
};

const ALL_PHRASES = buildPhraseVariants(PHRASE_BANK);

const state = {
  currentPhrase: null,
  currentOptions: [],
  questionHistory: [],
  historyIndex: -1,
  lastPhraseId: null,
  optionFocusIndex: 0,
  settingsOpen: false,
  shortcutOpen: false,
  uiMode: UI_MODES.STANDARD,
  recordingModeIndex: 0,
  answered: false,
  correctCount: 0,
  answeredCount: 0,
  activePhrases: [],
  respectMode: DEFAULT_RESPECT_MODE,
  polarityMode: POLARITY_MODES.MIXED,
  clipIds: new Set(),
  db: null,
  memoryClips: new Map(),
  audio: null,
  audioUrl: null,
  feedbackAudioContext: null,
  autoNextTimer: null,
  speechVoices: [],
  ttsMode: TTS_MODES.MAC_BASIC,
  cloudTts: {
    apiKey: "",
    model: DEFAULT_CLOUD_TTS.model,
    voice: DEFAULT_CLOUD_TTS.voice,
    instructions: DEFAULT_CLOUD_TTS.instructions
  },
  recorder: null,
  recordStream: null,
  recordChunks: [],
  recordingForId: null
};

const ui = {};

document.addEventListener("DOMContentLoaded", () => {
  init().catch((error) => {
    console.error(error);
    alert("Could not initialize app. Please refresh the page.");
  });
});

async function init() {
  cacheElements();
  populateCommandSelect();
  attachEvents();
  loadUiPreferences();
  loadQuizPreferences();
  loadTtsPreferences();
  initSpeechVoices();
  syncUiModeUi();
  applyUiMode();
  syncQuizFilterUi();
  syncTtsModeUi();
  rebuildActivePhrases();
  await initStorage();
  await refreshCoverage();
  nextQuestion();
  updateRecordPreview();
}

function cacheElements() {
  ui.quizCard = document.querySelector(".quiz-card");
  ui.openSettingsBtn = document.getElementById("open-settings-btn");
  ui.openSettingsFabBtn = document.getElementById("open-settings-fab-btn");
  ui.openShortcutsBtn = document.getElementById("open-shortcuts-btn");
  ui.closeSettingsBtn = document.getElementById("close-settings-btn");
  ui.settingsBackdrop = document.getElementById("settings-backdrop");
  ui.settingsDrawer = document.getElementById("settings-drawer");
  ui.uiModeSelect = document.getElementById("ui-mode-select");
  ui.shortcutBackdrop = document.getElementById("shortcut-backdrop");
  ui.shortcutOverlay = document.getElementById("shortcut-overlay");
  ui.closeShortcutsBtn = document.getElementById("close-shortcuts-btn");

  ui.progressText = document.getElementById("progress-text");
  ui.scoreText = document.getElementById("score-text");
  ui.recordingModeCard = document.getElementById("recording-mode-card");
  ui.englishPrompt = document.getElementById("english-prompt");
  ui.respectIndicator = document.getElementById("respect-indicator");
  ui.questionMeta = document.getElementById("question-meta");
  ui.playAudioBtn = document.getElementById("play-audio-btn");
  ui.audioHint = document.getElementById("audio-hint");
  ui.options = document.getElementById("options");
  ui.feedback = document.getElementById("feedback");
  ui.backBtn = document.getElementById("back-btn");
  ui.revealBtn = document.getElementById("reveal-btn");
  ui.nextBtn = document.getElementById("next-btn");

  ui.respectModeSelect = document.getElementById("respect-mode-select");
  ui.polarityModeSelect = document.getElementById("polarity-mode-select");

  ui.ttsModeSelect = document.getElementById("tts-mode-select");
  ui.macTtsHint = document.getElementById("mac-tts-hint");
  ui.cloudSettings = document.getElementById("cloud-settings");
  ui.openaiKeyInput = document.getElementById("openai-key-input");
  ui.ttsModelInput = document.getElementById("tts-model-input");
  ui.ttsVoiceInput = document.getElementById("tts-voice-input");
  ui.ttsInstructionsInput = document.getElementById("tts-instructions-input");
  ui.saveCloudConfigBtn = document.getElementById("save-cloud-config-btn");
  ui.ttsStatus = document.getElementById("tts-status");

  ui.commandSelect = document.getElementById("command-select");
  ui.previewEnglish = document.getElementById("preview-english");
  ui.previewTamil = document.getElementById("preview-tamil");
  ui.recordingProgress = document.getElementById("recording-progress");
  ui.recordingCoverage = document.getElementById("recording-coverage");
  ui.recordingModeEnglish = document.getElementById("recording-mode-english");
  ui.recordingModeTags = document.getElementById("recording-mode-tags");
  ui.recordingModeTamil = document.getElementById("recording-mode-tamil");
  ui.recordingModeRoman = document.getElementById("recording-mode-roman");
  ui.recordingClipState = document.getElementById("recording-clip-state");
  ui.recordingPrevBtn = document.getElementById("recording-prev-btn");
  ui.recordingNextBtn = document.getElementById("recording-next-btn");
  ui.recordingModeRecordBtn = document.getElementById("recording-mode-record-btn");
  ui.recordingModeStopBtn = document.getElementById("recording-mode-stop-btn");
  ui.recordingModePlayBtn = document.getElementById("recording-mode-play-btn");
  ui.recordingModeDeleteBtn = document.getElementById("recording-mode-delete-btn");
  ui.recordingInlineStatus = document.getElementById("recording-inline-status");
  ui.startRecordBtn = document.getElementById("start-record-btn");
  ui.stopRecordBtn = document.getElementById("stop-record-btn");
  ui.playRecordBtn = document.getElementById("play-record-btn");
  ui.deleteRecordBtn = document.getElementById("delete-record-btn");
  ui.uploadInput = document.getElementById("upload-input");
  ui.recordStatus = document.getElementById("record-status");
  ui.coverageList = document.getElementById("coverage-list");
}

function attachEvents() {
  ui.openSettingsBtn.addEventListener("click", openSettings);
  ui.openSettingsFabBtn.addEventListener("click", openSettings);
  ui.openShortcutsBtn.addEventListener("click", openShortcuts);
  ui.closeSettingsBtn.addEventListener("click", closeSettings);
  ui.settingsBackdrop.addEventListener("click", closeSettings);
  ui.closeShortcutsBtn.addEventListener("click", closeShortcuts);
  ui.shortcutBackdrop.addEventListener("click", closeShortcuts);
  ui.uiModeSelect.addEventListener("change", onUiModeChange);

  ui.options.addEventListener("click", onChooseOption);
  ui.backBtn.addEventListener("click", previousQuestion);
  ui.revealBtn.addEventListener("click", revealAnswer);
  ui.nextBtn.addEventListener("click", nextQuestion);
  ui.playAudioBtn.addEventListener("click", playCurrentPhraseAudio);
  ui.respectModeSelect.addEventListener("change", onQuizFilterChange);
  ui.polarityModeSelect.addEventListener("change", onQuizFilterChange);

  ui.ttsModeSelect.addEventListener("change", onChangeTtsMode);
  ui.saveCloudConfigBtn.addEventListener("click", saveCloudTtsSettings);

  ui.commandSelect.addEventListener("change", onCommandSelectChange);
  ui.recordingPrevBtn.addEventListener("click", () => stepRecordingPhrase(-1));
  ui.recordingNextBtn.addEventListener("click", () => stepRecordingPhrase(1));
  ui.recordingModeRecordBtn.addEventListener("click", startRecording);
  ui.recordingModeStopBtn.addEventListener("click", stopRecording);
  ui.recordingModePlayBtn.addEventListener("click", playSelectedRecording);
  ui.recordingModeDeleteBtn.addEventListener("click", deleteSelectedRecording);
  ui.startRecordBtn.addEventListener("click", startRecording);
  ui.stopRecordBtn.addEventListener("click", stopRecording);
  ui.playRecordBtn.addEventListener("click", playSelectedRecording);
  ui.deleteRecordBtn.addEventListener("click", deleteSelectedRecording);
  ui.uploadInput.addEventListener("change", uploadRecording);

  document.addEventListener("keydown", onGlobalKeydown);
  window.addEventListener("beforeunload", stopAndCleanupAudio);
}

function openSettings() {
  if (state.shortcutOpen) {
    closeShortcuts();
  }
  state.settingsOpen = true;
  ui.settingsBackdrop.classList.remove("hidden");
  ui.settingsDrawer.classList.remove("hidden");
  syncBodyScrollLock();
  ui.closeSettingsBtn.focus();
}

function closeSettings() {
  state.settingsOpen = false;
  ui.settingsBackdrop.classList.add("hidden");
  ui.settingsDrawer.classList.add("hidden");
  syncBodyScrollLock();
  const focusTarget =
    state.uiMode === UI_MODES.LOW_VISION ? ui.openSettingsFabBtn : ui.openSettingsBtn;
  if (focusTarget && !focusTarget.classList.contains("hidden")) {
    focusTarget.focus();
  }
}

function openShortcuts() {
  state.shortcutOpen = true;
  ui.shortcutBackdrop.classList.remove("hidden");
  ui.shortcutOverlay.classList.remove("hidden");
  syncBodyScrollLock();
  ui.closeShortcutsBtn.focus();
}

function closeShortcuts() {
  state.shortcutOpen = false;
  ui.shortcutBackdrop.classList.add("hidden");
  ui.shortcutOverlay.classList.add("hidden");
  syncBodyScrollLock();

  if (state.settingsOpen) {
    ui.closeSettingsBtn.focus();
    return;
  }

  const focusTarget =
    state.uiMode === UI_MODES.LOW_VISION ? ui.openSettingsFabBtn : ui.openSettingsBtn;
  if (focusTarget && !focusTarget.classList.contains("hidden")) {
    focusTarget.focus();
  }
}

function toggleShortcuts() {
  if (state.shortcutOpen) {
    closeShortcuts();
  } else {
    openShortcuts();
  }
}

function syncBodyScrollLock() {
  document.body.style.overflow = state.settingsOpen || state.shortcutOpen ? "hidden" : "";
}

function onGlobalKeydown(event) {
  if (event.defaultPrevented) {
    return;
  }

  const key = event.key;
  const lower = key.toLowerCase();
  const typing = isTypingElement(event.target);
  const hasModifier = event.metaKey || event.ctrlKey || event.altKey;
  const hasSaveModifier = (event.metaKey || event.ctrlKey) && !event.altKey;

  if (state.shortcutOpen) {
    if (key === "Escape" || key === "?") {
      event.preventDefault();
      closeShortcuts();
    }
    return;
  }

  if (state.settingsOpen) {
    if (key === "Escape") {
      event.preventDefault();
      closeSettings();
      return;
    }

    if (typing) {
      return;
    }

    if (hasSaveModifier && lower === "s") {
      event.preventDefault();
      saveCloudTtsSettings();
      return;
    }

    if (hasModifier) {
      return;
    }

    if (key === "?") {
      event.preventDefault();
      toggleShortcuts();
      return;
    }

    if (lower === "h") {
      event.preventDefault();
      openHelpPage();
      return;
    }

    if (lower === "d") {
      event.preventDefault();
      toggleUiMode();
      return;
    }

    if (lower === "m") {
      event.preventDefault();
      cycleRespectMode();
      return;
    }

    if (lower === "p") {
      event.preventDefault();
      cyclePolarityMode();
      return;
    }

    if (lower === "f") {
      event.preventDefault();
      cycleTtsMode();
      return;
    }

    if (lower === "v") {
      event.preventDefault();
      toggleRecordingFromKeyboard();
      return;
    }

    if (lower === "k") {
      event.preventDefault();
      playSelectedRecording();
    }
    return;
  }

  if (!typing && !hasModifier && lower === "s") {
    event.preventDefault();
    openSettings();
    return;
  }

  if (!typing && !hasModifier && key === "?") {
    event.preventDefault();
    toggleShortcuts();
    return;
  }

  if (!typing && !hasModifier && lower === "h") {
    event.preventDefault();
    openHelpPage();
    return;
  }

  if (!typing && !hasModifier && lower === "d") {
    event.preventDefault();
    toggleUiMode();
    return;
  }

  if (!typing && !hasModifier && lower === "m") {
    event.preventDefault();
    cycleRespectMode();
    return;
  }

  if (!typing && !hasModifier && lower === "p") {
    event.preventDefault();
    cyclePolarityMode();
    return;
  }

  if (!typing && !hasModifier && lower === "f") {
    event.preventDefault();
    cycleTtsMode();
    return;
  }

  if (typing || hasModifier) {
    return;
  }

  if (state.uiMode === UI_MODES.TEACHER_RECORDING) {
    if (key === "ArrowRight" || key === "ArrowDown" || lower === "n" || key === "Enter") {
      event.preventDefault();
      stepRecordingPhrase(1);
      return;
    }

    if (key === "ArrowLeft" || key === "ArrowUp") {
      event.preventDefault();
      stepRecordingPhrase(-1);
      return;
    }

    if (lower === "b") {
      event.preventDefault();
      stepRecordingPhrase(-1);
      return;
    }

    if (lower === "v") {
      event.preventDefault();
      toggleRecordingFromKeyboard();
      return;
    }

    if (lower === "x") {
      event.preventDefault();
      stopRecording();
      return;
    }

    if (lower === "k") {
      event.preventDefault();
      playSelectedRecording();
      return;
    }

    if (key === "Delete" || key === "Backspace") {
      event.preventDefault();
      deleteSelectedRecording();
    }
    return;
  }

  if (key === "ArrowRight" || key === "ArrowDown") {
    event.preventDefault();
    moveOptionFocus(1);
    return;
  }

  if (key === "ArrowLeft" || key === "ArrowUp") {
    event.preventDefault();
    moveOptionFocus(-1);
    return;
  }

  if (/^[1-4]$/.test(key)) {
    event.preventDefault();
    answerOptionByIndex(Number(key) - 1);
    return;
  }

  if (key === "Enter") {
    event.preventDefault();
    if (state.answered) {
      nextQuestion();
    } else {
      answerOptionByIndex(state.optionFocusIndex);
    }
    return;
  }

  if (lower === "n") {
    event.preventDefault();
    nextQuestion();
    return;
  }

  if (lower === "b") {
    event.preventDefault();
    previousQuestion();
    return;
  }

  if (lower === "r") {
    event.preventDefault();
    revealAnswer();
    return;
  }

  if (lower === "l") {
    event.preventDefault();
    playCurrentPhraseAudio();
  }
}

function openHelpPage() {
  window.open("docs.html", "_blank", "noopener");
}

function cycleRespectMode() {
  cycleSelectValue(ui.respectModeSelect, RESPECT_ORDER);
  onQuizFilterChange();
}

function cyclePolarityMode() {
  cycleSelectValue(ui.polarityModeSelect, POLARITY_ORDER);
  onQuizFilterChange();
}

function cycleTtsMode() {
  cycleSelectValue(ui.ttsModeSelect, TTS_ORDER);
  onChangeTtsMode();
}

function toggleUiMode() {
  cycleSelectValue(ui.uiModeSelect, UI_MODE_ORDER);
  onUiModeChange();
}

function cycleSelectValue(selectEl, values) {
  const current = selectEl.value;
  const index = values.indexOf(current);
  const next = values[(index + 1 + values.length) % values.length];
  selectEl.value = next;
}

function toggleRecordingFromKeyboard() {
  if (state.recorder && state.recorder.state === "recording") {
    stopRecording();
    return;
  }
  startRecording();
}

function isTypingElement(target) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }
  const tag = target.tagName;
  return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || target.isContentEditable;
}

function loadUiPreferences() {
  const savedUiMode = safeStorageGet(UI_MODE_KEY, UI_MODES.STANDARD);
  state.uiMode = Object.values(UI_MODES).includes(savedUiMode) ? savedUiMode : UI_MODES.STANDARD;
}

function syncUiModeUi() {
  ui.uiModeSelect.value = state.uiMode;
}

function onUiModeChange() {
  state.uiMode = ui.uiModeSelect.value;
  safeStorageSet(UI_MODE_KEY, state.uiMode);
  applyUiMode();
}

function applyUiMode() {
  const lowVision = state.uiMode === UI_MODES.LOW_VISION;
  const recordingMode = state.uiMode === UI_MODES.TEACHER_RECORDING;
  document.body.classList.toggle("low-vision", lowVision);
  document.body.classList.toggle("teacher-recording", recordingMode);
  ui.quizCard.classList.toggle("hidden", recordingMode);
  ui.recordingModeCard.classList.toggle("hidden", !recordingMode);
  ui.openSettingsFabBtn.classList.toggle("hidden", !lowVision);
  syncBackButtonState();
  if (recordingMode) {
    syncRecordingModeCard();
  }
}

function loadQuizPreferences() {
  const savedRespect = safeStorageGet(RESPECT_MODE_KEY, DEFAULT_RESPECT_MODE);
  const savedPolarity = safeStorageGet(POLARITY_MODE_KEY, POLARITY_MODES.MIXED);
  const validRespect = Object.values(RESPECT_MODES).includes(savedRespect);
  const validPolarity = Object.values(POLARITY_MODES).includes(savedPolarity);

  state.respectMode = validRespect ? savedRespect : DEFAULT_RESPECT_MODE;
  state.polarityMode = validPolarity ? savedPolarity : POLARITY_MODES.MIXED;

  if (!validRespect) {
    safeStorageSet(RESPECT_MODE_KEY, DEFAULT_RESPECT_MODE);
  }
  if (!validPolarity) {
    safeStorageSet(POLARITY_MODE_KEY, POLARITY_MODES.MIXED);
  }
}

function syncQuizFilterUi() {
  ui.respectModeSelect.value = state.respectMode;
  ui.polarityModeSelect.value = state.polarityMode;
}

function onQuizFilterChange() {
  state.respectMode = ui.respectModeSelect.value;
  state.polarityMode = ui.polarityModeSelect.value;
  safeStorageSet(RESPECT_MODE_KEY, state.respectMode);
  safeStorageSet(POLARITY_MODE_KEY, state.polarityMode);
  rebuildActivePhrases();
  resetQuestionHistory();
  nextQuestion();
}

function rebuildActivePhrases() {
  state.activePhrases = ALL_PHRASES.filter((phrase) => {
    const respectOk =
      state.respectMode === RESPECT_MODES.MIXED || phrase.respect === state.respectMode;
    const polarityOk =
      state.polarityMode === POLARITY_MODES.MIXED || phrase.polarity === state.polarityMode;
    return respectOk && polarityOk;
  });
}

function nextQuestion() {
  clearAutoNextTimer();
  stopAndCleanupAudio();
  state.answered = false;
  setFeedback("");

  let loadedFromHistory = false;
  if (state.historyIndex < state.questionHistory.length - 1) {
    state.historyIndex += 1;
    loadedFromHistory = loadQuestionSnapshot(state.questionHistory[state.historyIndex]);
  }

  if (!loadedFromHistory) {
    pickPhrase();
    if (state.currentPhrase) {
      const snapshot = {
        phraseId: state.currentPhrase.id,
        optionIds: state.currentOptions.map((item) => item.id)
      };
      if (state.historyIndex < state.questionHistory.length - 1) {
        state.questionHistory = state.questionHistory.slice(0, state.historyIndex + 1);
      }
      state.questionHistory.push(snapshot);
      state.historyIndex = state.questionHistory.length - 1;
    }
  }

  renderOptions();
  state.optionFocusIndex = 0;
  syncOptionFocus();
  syncQuizHeader();
  syncAudioState();
  syncBackButtonState();
}

function clearAutoNextTimer() {
  if (state.autoNextTimer) {
    window.clearTimeout(state.autoNextTimer);
    state.autoNextTimer = null;
  }
}

function previousQuestion() {
  if (state.historyIndex <= 0) {
    return;
  }

  clearAutoNextTimer();
  stopAndCleanupAudio();
  state.answered = false;
  setFeedback("");
  state.historyIndex -= 1;

  const loaded = loadQuestionSnapshot(state.questionHistory[state.historyIndex]);
  if (!loaded) {
    resetQuestionHistory();
    nextQuestion();
    return;
  }

  renderOptions();
  state.optionFocusIndex = 0;
  syncOptionFocus();
  syncQuizHeader();
  syncAudioState();
  syncBackButtonState();
}

function resetQuestionHistory() {
  state.questionHistory = [];
  state.historyIndex = -1;
  syncBackButtonState();
}

function syncBackButtonState() {
  if (!ui.backBtn) {
    return;
  }
  const blockedByMode = state.uiMode === UI_MODES.TEACHER_RECORDING;
  ui.backBtn.disabled = blockedByMode || state.historyIndex <= 0;
}

function loadQuestionSnapshot(snapshot) {
  if (!snapshot) {
    return false;
  }

  const phrase = findPhrase(snapshot.phraseId);
  const options = (snapshot.optionIds || []).map((id) => findPhrase(id)).filter(Boolean);
  if (!phrase || !options.length) {
    return false;
  }

  state.currentPhrase = phrase;
  state.lastPhraseId = phrase.id;
  state.currentOptions = options;
  ui.englishPrompt.textContent = phrase.english;
  ui.questionMeta.textContent = phrase.respectLabel;
  updateRespectCue(phrase.respect);
  return true;
}

function pickPhrase() {
  if (!state.activePhrases.length) {
    state.currentPhrase = null;
    state.currentOptions = [];
    ui.englishPrompt.textContent = "No phrases for selected filter.";
    ui.questionMeta.textContent = "Change settings to continue.";
    updateRespectCue(null);
    return;
  }

  const candidates = state.activePhrases.filter((item) => item.id !== state.lastPhraseId);
  const pool = candidates.length ? candidates : state.activePhrases;
  const chosen = randomItem(pool);
  state.currentPhrase = chosen;
  state.lastPhraseId = chosen.id;
  state.currentOptions = buildOptions(chosen.id);
  ui.englishPrompt.textContent = chosen.english;
  ui.questionMeta.textContent = chosen.respectLabel;
  updateRespectCue(chosen.respect);
}

function buildOptions(correctId) {
  const correct = findPhrase(correctId);
  const availableDistractors = state.activePhrases.filter((item) => item.id !== correctId);
  const maxDistractors = Math.min(3, availableDistractors.length);
  const distractors = shuffle(availableDistractors).slice(0, maxDistractors);
  return shuffle([correct, ...distractors]);
}

function renderOptions() {
  ui.options.innerHTML = "";
  state.currentOptions.forEach((item, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "option";
    button.dataset.phraseId = item.id;
    button.dataset.optionIndex = String(index);
    button.innerHTML = `<span class="tamil-line">${index + 1}. ${item.tamil}</span><span class="english-reveal">${index + 1}. ${item.english}</span><span class="lang-gap" aria-hidden="true"></span><span class="roman">${item.roman}</span>`;
    ui.options.appendChild(button);
  });
}

function updateRespectCue(respect) {
  ui.quizCard.classList.remove("respectful-mode", "casual-mode");
  ui.respectIndicator.classList.remove("respectful", "casual");

  if (respect === RESPECT_MODES.RESPECTFUL) {
    ui.quizCard.classList.add("respectful-mode");
    ui.respectIndicator.classList.add("respectful");
    ui.respectIndicator.textContent = "With Respect";
    return;
  }

  if (respect === RESPECT_MODES.CASUAL) {
    ui.quizCard.classList.add("casual-mode");
    ui.respectIndicator.classList.add("casual");
    ui.respectIndicator.textContent = "Without Respect";
    return;
  }

  ui.respectIndicator.textContent = "Respect Mode";
}

function getOptionButtons() {
  return Array.from(ui.options.querySelectorAll("button.option"));
}

function moveOptionFocus(delta) {
  const options = getOptionButtons().filter((button) => !button.disabled);
  if (!options.length) {
    return;
  }
  const count = options.length;
  state.optionFocusIndex = (state.optionFocusIndex + delta + count) % count;
  syncOptionFocus();
}

function syncOptionFocus() {
  const buttons = getOptionButtons();
  if (!buttons.length) {
    return;
  }

  let index = state.optionFocusIndex;
  if (index < 0 || index >= buttons.length) {
    index = 0;
    state.optionFocusIndex = 0;
  }

  buttons.forEach((button, buttonIndex) => {
    button.classList.toggle("kb-focus", buttonIndex === index && !state.answered);
  });
}

function onChooseOption(event) {
  const button = event.target.closest("button.option");
  if (!button) {
    return;
  }

  const index = Number(button.dataset.optionIndex || 0);
  state.optionFocusIndex = Number.isFinite(index) ? index : 0;
  syncOptionFocus();

  if (state.answered || !state.currentPhrase) {
    return;
  }

  submitAnswer(button.dataset.phraseId);
}

function answerOptionByIndex(index) {
  const buttons = getOptionButtons().filter((button) => !button.disabled);
  if (!buttons.length || state.answered || !state.currentPhrase) {
    return;
  }

  const safeIndex = Math.max(0, Math.min(index, buttons.length - 1));
  const button = buttons[safeIndex];
  const originalIndex = Number(button.dataset.optionIndex || safeIndex);
  state.optionFocusIndex = originalIndex;
  syncOptionFocus();
  submitAnswer(button.dataset.phraseId);
}

function submitAnswer(selectedId) {
  if (!state.currentPhrase || state.answered) {
    return;
  }

  const correctId = state.currentPhrase.id;
  if (selectedId === correctId) {
    const answeredPhrase = state.currentPhrase;
    state.answered = true;
    state.answeredCount += 1;
    state.correctCount += 1;
    setFeedback("");
    markAnswerStates(selectedId, correctId);
    syncQuizHeader();
    void runCorrectAnswerFlow(answeredPhrase);
    return;
  }

  setFeedback("");
  markWrongAttempt(selectedId);
  void playTryAgainPrompt();
}

async function runCorrectAnswerFlow(answeredPhrase) {
  if (!answeredPhrase) {
    return;
  }

  await playCorrectTone();
  if (!isCurrentAnsweredPhrase(answeredPhrase.id)) {
    return;
  }

  await playPhraseAudio(answeredPhrase, { waitForEnd: true, silentUnavailable: true });
  if (!isCurrentAnsweredPhrase(answeredPhrase.id)) {
    return;
  }

  clearAutoNextTimer();
  state.autoNextTimer = window.setTimeout(() => {
    state.autoNextTimer = null;
    if (isCurrentAnsweredPhrase(answeredPhrase.id)) {
      nextQuestion();
    }
  }, 450);
}

function isCurrentAnsweredPhrase(phraseId) {
  return Boolean(state.answered && state.currentPhrase && state.currentPhrase.id === phraseId);
}

function revealAnswer() {
  if (state.answered || !state.currentPhrase) {
    return;
  }

  state.answered = true;
  state.answeredCount += 1;
  const correct = state.currentPhrase;
  setFeedback("");
  markAnswerStates(null, correct.id, true);
  syncQuizHeader();
}

function markAnswerStates(selectedId, correctId, revealOnly = false) {
  getOptionButtons().forEach((button) => {
    const phraseId = button.dataset.phraseId;
    button.classList.remove("kb-focus");
    if (phraseId === correctId) {
      button.classList.add(revealOnly ? "reveal" : "correct");
    } else if (!revealOnly && phraseId === selectedId) {
      button.classList.add("wrong");
    }
    button.classList.toggle("show-english", revealOnly);
    button.disabled = true;
  });
}

function markWrongAttempt(selectedId) {
  const buttons = getOptionButtons();
  const selectedButton = buttons.find((button) => button.dataset.phraseId === selectedId);
  if (!selectedButton) {
    return;
  }

  selectedButton.classList.remove("kb-focus");
  selectedButton.classList.add("wrong");
  selectedButton.disabled = true;

  const selectedIndex = Number(selectedButton.dataset.optionIndex || 0);
  focusNextEnabledOption(selectedIndex + 1);
}

function focusNextEnabledOption(preferredIndex = 0) {
  const buttons = getOptionButtons();
  const enabledIndices = buttons
    .map((button, index) => (button.disabled ? -1 : index))
    .filter((index) => index >= 0);

  if (!enabledIndices.length) {
    return;
  }

  const next = enabledIndices.find((index) => index >= preferredIndex) ?? enabledIndices[0];
  state.optionFocusIndex = next;
  syncOptionFocus();
}

function syncQuizHeader() {
  ui.progressText.textContent = `Question ${state.answeredCount + 1}`;
  ui.scoreText.textContent = `Score: ${state.correctCount}/${state.answeredCount}`;
}

function setFeedback(message, kind = "") {
  ui.feedback.textContent = message;
  ui.feedback.classList.remove("ok", "err");
  if (kind) {
    ui.feedback.classList.add(kind);
  }
}

async function playCurrentPhraseAudio() {
  if (!state.currentPhrase) {
    return;
  }

  const usedFallback = await playPhraseAudio(state.currentPhrase);
  if (!usedFallback) {
    syncAudioState();
  }
}

async function playPhraseAudio(phrase, options = {}) {
  if (!phrase) {
    return false;
  }

  const { waitForEnd = false, silentUnavailable = false } = options;
  const blob = await getClip(phrase.id);
  if (blob) {
    return playBlob(blob, waitForEnd);
  }

  return playTtsFallback(phrase, { waitForEnd, silentUnavailable });
}

function syncAudioState() {
  const hasPhrase = Boolean(state.currentPhrase);
  const hasClip = hasPhrase && state.clipIds.has(state.currentPhrase.id);
  const fallbackReady = hasPhrase && canUseTtsFallback();
  ui.playAudioBtn.disabled = !hasClip && !fallbackReady;

  if (!hasPhrase) {
    ui.audioHint.textContent = "No phrase selected.";
    return;
  }

  if (hasClip) {
    ui.audioHint.textContent = "Real voice clip ready.";
    if (state.ttsMode !== TTS_MODES.NONE) {
      setTtsStatus("Real clip plays first. Fallback is only for missing clips.");
    }
    return;
  }

  if (state.ttsMode === TTS_MODES.NONE) {
    ui.audioHint.textContent = "No real clip saved for this phrase.";
    setTtsStatus("Fallback disabled.");
    return;
  }

  if (state.ttsMode === TTS_MODES.MAC_BASIC) {
    ui.audioHint.textContent = "Using Mac Basic fallback.";
    const tamilVoice = pickTamilVoice();
    setTtsStatus(
      tamilVoice
        ? `Mac voice: ${tamilVoice.name} (${tamilVoice.lang})`
        : "Tamil voice missing. Romanized fallback will be used."
    );
    return;
  }

  if (state.ttsMode === TTS_MODES.CLOUD_PLUS) {
    const hasApiKey = Boolean(state.cloudTts.apiKey);
    ui.audioHint.textContent = hasApiKey
      ? "Using upgraded cloud fallback."
      : "Cloud fallback selected. Add API key.";
    setTtsStatus(
      hasApiKey
        ? `Cloud ready: ${state.cloudTts.model} / ${state.cloudTts.voice}`
        : "Save cloud settings to enable cloud fallback."
    );
  }
}

function canUseTtsFallback() {
  if (state.ttsMode === TTS_MODES.MAC_BASIC) {
    return "speechSynthesis" in window && "SpeechSynthesisUtterance" in window;
  }
  if (state.ttsMode === TTS_MODES.CLOUD_PLUS) {
    return Boolean(state.cloudTts.apiKey);
  }
  return false;
}

async function playTtsFallback(phrase, options = {}) {
  const { waitForEnd = false, silentUnavailable = false } = options;
  if (state.ttsMode === TTS_MODES.NONE) {
    if (!silentUnavailable) {
      setTtsStatus("No fallback selected.", "err");
    }
    return false;
  }
  if (state.ttsMode === TTS_MODES.MAC_BASIC) {
    return speakWithMacBasic(phrase, { waitForEnd });
  }
  if (state.ttsMode === TTS_MODES.CLOUD_PLUS) {
    return speakWithCloudTts(phrase, { waitForEnd });
  }
  return false;
}

async function speakWithMacBasic(phrase, options = {}) {
  const { waitForEnd = false } = options;
  const success = await speakTextWithMacVoice(
    phrase.tamil,
    phrase.roman,
    { rate: 0.84, pitch: 1, volume: 1 },
    { waitForEnd, showStatus: true }
  );
  if (!success) {
    setTtsStatus("Mac fallback failed.", "err");
  }
  return success;
}

function pickTamilVoice() {
  if (!state.speechVoices.length) {
    return null;
  }
  return (
    state.speechVoices.find((voice) => voice.lang?.toLowerCase().startsWith("ta")) ||
    state.speechVoices.find((voice) => /tamil/i.test(`${voice.name} ${voice.lang}`)) ||
    null
  );
}

async function speakTextWithMacVoice(text, romanFallback, speechOptions = {}, options = {}) {
  if (!("speechSynthesis" in window) || !("SpeechSynthesisUtterance" in window)) {
    return false;
  }

  const { waitForEnd = false, showStatus = false } = options;
  stopAndCleanupAudio();
  const utterance = new SpeechSynthesisUtterance(text);
  const tamilVoice = pickTamilVoice();

  if (tamilVoice) {
    utterance.voice = tamilVoice;
    utterance.lang = tamilVoice.lang;
    if (showStatus) {
      setTtsStatus(`Using Mac voice "${tamilVoice.name}".`);
    }
  } else {
    utterance.text = romanFallback;
    utterance.lang = "en-IN";
    if (showStatus) {
      setTtsStatus("Tamil voice unavailable. Using romanized pronunciation.");
    }
  }

  utterance.rate = speechOptions.rate ?? 0.84;
  utterance.pitch = speechOptions.pitch ?? 1;
  utterance.volume = speechOptions.volume ?? 1;

  if (!waitForEnd) {
    if (showStatus) {
      utterance.onerror = () => setTtsStatus("Mac fallback failed.", "err");
    }
    window.speechSynthesis.speak(utterance);
    return true;
  }

  const played = await new Promise((resolve) => {
    let settled = false;
    const finish = (ok) => {
      if (settled) {
        return;
      }
      settled = true;
      resolve(ok);
    };

    utterance.onend = () => finish(true);
    utterance.onerror = () => finish(false);
    window.speechSynthesis.speak(utterance);
  });

  return played;
}

async function playTryAgainPrompt() {
  const respectful = state.currentPhrase?.respect === RESPECT_MODES.RESPECTFUL;
  const text = respectful ? "மீண்டும் முயற்சி செய்யுங்க" : "மீண்டும் முயற்சி செய்";
  const roman = respectful ? "Meendum muyarchi seiyunga" : "Meendum muyarchi sei";
  await speakTextWithMacVoice(
    text,
    roman,
    { rate: 0.92, pitch: 0.78, volume: 0.95 },
    { waitForEnd: false, showStatus: false }
  );
}

async function playCorrectTone() {
  const context = await getFeedbackAudioContext();
  if (!context) {
    return false;
  }

  const start = context.currentTime + 0.01;
  const notes = [
    { frequency: 587.33, at: 0, duration: 0.11 },
    { frequency: 739.99, at: 0.12, duration: 0.11 },
    { frequency: 880, at: 0.24, duration: 0.16 }
  ];

  notes.forEach((note) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();

    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(note.frequency, start + note.at);
    gain.gain.setValueAtTime(0.0001, start + note.at);
    gain.gain.exponentialRampToValueAtTime(0.16, start + note.at + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, start + note.at + note.duration);

    oscillator.connect(gain);
    gain.connect(context.destination);

    oscillator.start(start + note.at);
    oscillator.stop(start + note.at + note.duration + 0.02);
  });

  await wait(430);
  return true;
}

async function getFeedbackAudioContext() {
  const AudioContextCtor = window.AudioContext || window.webkitAudioContext;
  if (!AudioContextCtor) {
    return null;
  }

  if (!state.feedbackAudioContext) {
    state.feedbackAudioContext = new AudioContextCtor();
  }

  if (state.feedbackAudioContext.state === "suspended") {
    try {
      await state.feedbackAudioContext.resume();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  return state.feedbackAudioContext;
}

function wait(ms) {
  return new Promise((resolve) => {
    window.setTimeout(resolve, ms);
  });
}

async function speakWithCloudTts(phrase, options = {}) {
  const { waitForEnd = false } = options;
  if (!state.cloudTts.apiKey) {
    setTtsStatus("Cloud fallback requires API key.", "err");
    return false;
  }

  stopAndCleanupAudio();
  setTtsStatus("Generating cloud audio...");

  const requestBody = {
    model: state.cloudTts.model || DEFAULT_CLOUD_TTS.model,
    voice: state.cloudTts.voice || DEFAULT_CLOUD_TTS.voice,
    input: phrase.tamil,
    instructions: state.cloudTts.instructions || DEFAULT_CLOUD_TTS.instructions,
    response_format: "mp3"
  };

  try {
    const response = await fetch("https://api.openai.com/v1/audio/speech", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.cloudTts.apiKey}`
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || "Cloud request failed.");
    }

    const audioBlob = await response.blob();
    if (!audioBlob.size) {
      throw new Error("Cloud audio response empty.");
    }

    setTtsStatus("Playing cloud fallback.");
    await playBlob(audioBlob, waitForEnd);
    return true;
  } catch (error) {
    console.error(error);
    setTtsStatus("Cloud fallback failed. Check key/model/voice.", "err");
    return false;
  }
}

function loadTtsPreferences() {
  const persistedMode = safeStorageGet(TTS_MODE_KEY, TTS_MODES.MAC_BASIC);
  state.ttsMode = Object.values(TTS_MODES).includes(persistedMode)
    ? persistedMode
    : TTS_MODES.MAC_BASIC;

  state.cloudTts.apiKey = safeStorageGet(OPENAI_KEY_STORAGE_KEY, "");
  state.cloudTts.model = safeStorageGet(CLOUD_MODEL_STORAGE_KEY, DEFAULT_CLOUD_TTS.model);
  state.cloudTts.voice = safeStorageGet(CLOUD_VOICE_STORAGE_KEY, DEFAULT_CLOUD_TTS.voice);
  state.cloudTts.instructions = safeStorageGet(
    CLOUD_INSTRUCTIONS_STORAGE_KEY,
    DEFAULT_CLOUD_TTS.instructions
  );
}

function onChangeTtsMode() {
  state.ttsMode = ui.ttsModeSelect.value;
  safeStorageSet(TTS_MODE_KEY, state.ttsMode);
  syncTtsModeUi();
  syncAudioState();
}

function saveCloudTtsSettings() {
  state.cloudTts.apiKey = ui.openaiKeyInput.value.trim();
  state.cloudTts.model = ui.ttsModelInput.value.trim() || DEFAULT_CLOUD_TTS.model;
  state.cloudTts.voice = ui.ttsVoiceInput.value.trim() || DEFAULT_CLOUD_TTS.voice;
  state.cloudTts.instructions =
    ui.ttsInstructionsInput.value.trim() || DEFAULT_CLOUD_TTS.instructions;

  safeStorageSet(OPENAI_KEY_STORAGE_KEY, state.cloudTts.apiKey);
  safeStorageSet(CLOUD_MODEL_STORAGE_KEY, state.cloudTts.model);
  safeStorageSet(CLOUD_VOICE_STORAGE_KEY, state.cloudTts.voice);
  safeStorageSet(CLOUD_INSTRUCTIONS_STORAGE_KEY, state.cloudTts.instructions);

  setTtsStatus("Cloud settings saved.", "ok");
  syncAudioState();
}

function syncTtsModeUi() {
  ui.ttsModeSelect.value = state.ttsMode;
  ui.openaiKeyInput.value = state.cloudTts.apiKey;
  ui.ttsModelInput.value = state.cloudTts.model;
  ui.ttsVoiceInput.value = state.cloudTts.voice;
  ui.ttsInstructionsInput.value = state.cloudTts.instructions;

  const cloudSelected = state.ttsMode === TTS_MODES.CLOUD_PLUS;
  const macSelected = state.ttsMode === TTS_MODES.MAC_BASIC;
  ui.cloudSettings.classList.toggle("hidden", !cloudSelected);
  ui.macTtsHint.classList.toggle("hidden", !macSelected);
}

function initSpeechVoices() {
  if (!("speechSynthesis" in window)) {
    return;
  }
  refreshSpeechVoices();
  window.speechSynthesis.addEventListener("voiceschanged", refreshSpeechVoices);
}

function refreshSpeechVoices() {
  if (!("speechSynthesis" in window)) {
    state.speechVoices = [];
    return;
  }
  state.speechVoices = window.speechSynthesis.getVoices();
  syncAudioState();
}

function setTtsStatus(message, kind = "") {
  ui.ttsStatus.textContent = message;
  ui.ttsStatus.classList.remove("ok", "err");
  if (kind) {
    ui.ttsStatus.classList.add(kind);
  }
}

function populateCommandSelect() {
  ALL_PHRASES.forEach((phrase) => {
    const option = document.createElement("option");
    option.value = phrase.id;
    option.textContent = `${phrase.english} [${phrase.respectLabel}, ${phrase.polarityLabel}]`;
    ui.commandSelect.appendChild(option);
  });
}

function onCommandSelectChange() {
  updateRecordPreview();
}

function stepRecordingPhrase(delta) {
  if (!ALL_PHRASES.length) {
    return;
  }
  const count = ALL_PHRASES.length;
  const nextIndex = (state.recordingModeIndex + delta + count) % count;
  const nextPhrase = ALL_PHRASES[nextIndex];
  if (!nextPhrase) {
    return;
  }
  state.recordingModeIndex = nextIndex;
  ui.commandSelect.value = nextPhrase.id;
  updateRecordPreview();
}

function syncRecordingModeCard() {
  if (!ui.recordingModeCard || !ALL_PHRASES.length) {
    return;
  }

  const selected = findPhrase(ui.commandSelect.value) || ALL_PHRASES[state.recordingModeIndex] || null;
  if (!selected) {
    ui.recordingModeEnglish.textContent = "No phrase selected";
    ui.recordingModeTags.textContent = "";
    ui.recordingModeTamil.textContent = "";
    ui.recordingModeRoman.textContent = "";
    ui.recordingProgress.textContent = "Phrase 0 / 0";
    ui.recordingCoverage.textContent = "Recorded 0 / 0";
    ui.recordingClipState.textContent = "";
    return;
  }

  const selectedIndex = ALL_PHRASES.findIndex((item) => item.id === selected.id);
  if (selectedIndex >= 0) {
    state.recordingModeIndex = selectedIndex;
  }

  const hasClip = state.clipIds.has(selected.id);
  const total = ALL_PHRASES.length;
  const recorded = state.clipIds.size;

  ui.recordingModeEnglish.textContent = selected.english;
  ui.recordingModeTags.textContent = `${selected.respectLabel} · ${selected.polarityLabel}`;
  ui.recordingModeTamil.textContent = selected.tamil;
  ui.recordingModeRoman.textContent = selected.roman;
  ui.recordingProgress.textContent = `Phrase ${state.recordingModeIndex + 1} / ${total}`;
  ui.recordingCoverage.textContent = `Recorded ${recorded} / ${total}`;
  ui.recordingClipState.textContent = hasClip ? "Saved clip ready." : "No saved clip yet.";
  ui.recordingClipState.classList.toggle("ok", hasClip);
  ui.recordingClipState.classList.toggle("err", !hasClip);
}

function syncRecordingControlButtons(hasClip) {
  ui.playRecordBtn.disabled = !hasClip;
  ui.deleteRecordBtn.disabled = !hasClip;
  ui.recordingModePlayBtn.disabled = !hasClip;
  ui.recordingModeDeleteBtn.disabled = !hasClip;
  const recordingNow = Boolean(state.recorder && state.recorder.state === "recording");
  ui.startRecordBtn.disabled = recordingNow;
  ui.stopRecordBtn.disabled = !recordingNow;
  ui.recordingModeRecordBtn.disabled = recordingNow;
  ui.recordingModeStopBtn.disabled = !recordingNow;
}

async function playSelectedRecording() {
  const phraseId = ui.commandSelect.value;
  const blob = await getClip(phraseId);
  if (!blob) {
    setRecordStatus("No saved clip for this phrase.", "err");
    return;
  }
  await playBlob(blob);
}

async function playBlob(blob, waitForEnd = false) {
  stopAndCleanupAudio();
  state.audioUrl = URL.createObjectURL(blob);
  state.audio = new Audio(state.audioUrl);
  state.audio.onended = stopAndCleanupAudio;
  state.audio.onerror = stopAndCleanupAudio;

  try {
    await state.audio.play();
    if (waitForEnd && state.audio) {
      await new Promise((resolve) => {
        const activeAudio = state.audio;
        if (!activeAudio) {
          resolve();
          return;
        }
        const done = () => resolve();
        activeAudio.addEventListener("ended", done, { once: true });
        activeAudio.addEventListener("error", done, { once: true });
      });
    }
    return true;
  } catch (error) {
    console.error(error);
    setRecordStatus("Could not play audio clip.", "err");
    stopAndCleanupAudio();
    return false;
  }
}

function stopAndCleanupAudio() {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
  }
  if (state.audio) {
    state.audio.pause();
    state.audio.src = "";
    state.audio = null;
  }
  if (state.audioUrl) {
    URL.revokeObjectURL(state.audioUrl);
    state.audioUrl = null;
  }
}

async function initStorage() {
  if (!("indexedDB" in window)) {
    setRecordStatus("IndexedDB unavailable. Using temporary memory.", "err");
    return;
  }

  try {
    state.db = await openDatabase();
  } catch (error) {
    console.error(error);
    setRecordStatus("Could not open local database. Using temporary memory.", "err");
  }
}

function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, { keyPath: "id" });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function refreshCoverage() {
  state.clipIds = await getClipIds();
  renderCoverageList();
  syncAudioState();
}

function renderCoverageList() {
  ui.coverageList.innerHTML = "";
  ALL_PHRASES.forEach((phrase) => {
    const item = document.createElement("li");
    const hasClip = state.clipIds.has(phrase.id);
    item.className = hasClip ? "ready" : "";
    item.textContent = `${hasClip ? "✓" : "○"} ${phrase.english} (${phrase.respectLabel}, ${phrase.polarityLabel})`;
    ui.coverageList.appendChild(item);
  });
}

async function startRecording() {
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    setRecordStatus("Recording is not supported in this browser.", "err");
    return;
  }

  if (state.recorder && state.recorder.state === "recording") {
    return;
  }

  const phraseId = ui.commandSelect.value;
  state.recordingForId = phraseId;
  state.recordChunks = [];

  try {
    state.recordStream = await navigator.mediaDevices.getUserMedia({ audio: true });
    state.recorder = new MediaRecorder(state.recordStream);

    state.recorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        state.recordChunks.push(event.data);
      }
    };

    state.recorder.onstop = handleRecordingStop;
    state.recorder.onerror = () => {
      setRecordStatus("Recording failed. Try again.", "err");
      cleanupRecorder();
    };

    state.recorder.start();
    ui.startRecordBtn.disabled = true;
    ui.stopRecordBtn.disabled = false;
    setRecordStatus("Recording...");
  } catch (error) {
    console.error(error);
    cleanupRecorder();
    setRecordStatus("Microphone access denied or unavailable.", "err");
  }
}

function stopRecording() {
  if (state.recorder && state.recorder.state !== "inactive") {
    state.recorder.stop();
  }
}

async function handleRecordingStop() {
  try {
    const clip = new Blob(state.recordChunks, {
      type: state.recorder?.mimeType || "audio/webm"
    });

    if (clip.size === 0) {
      setRecordStatus("No audio captured.", "err");
      return;
    }

    const phraseId = state.recordingForId;
    await saveClip(phraseId, clip);
    await refreshCoverage();
    updateRecordPreview();

    const phrase = findPhrase(phraseId);
    setRecordStatus(`Saved clip for "${phrase.english}" (${phrase.respectLabel}, ${phrase.polarityLabel}).`, "ok");
  } catch (error) {
    console.error(error);
    setRecordStatus("Could not save recording.", "err");
  } finally {
    cleanupRecorder();
  }
}

function cleanupRecorder() {
  if (state.recordStream) {
    state.recordStream.getTracks().forEach((track) => track.stop());
  }
  state.recorder = null;
  state.recordStream = null;
  state.recordChunks = [];
  state.recordingForId = null;
  ui.startRecordBtn.disabled = false;
  ui.stopRecordBtn.disabled = true;
}

async function uploadRecording(event) {
  const file = event.target.files?.[0];
  if (!file) {
    return;
  }

  try {
    await saveClip(ui.commandSelect.value, file);
    await refreshCoverage();
    updateRecordPreview();
    setRecordStatus("Uploaded and saved clip.", "ok");
  } catch (error) {
    console.error(error);
    setRecordStatus("Could not save uploaded clip.", "err");
  } finally {
    ui.uploadInput.value = "";
  }
}

async function deleteSelectedRecording() {
  const phraseId = ui.commandSelect.value;
  try {
    await deleteClip(phraseId);
    await refreshCoverage();
    updateRecordPreview();
    setRecordStatus("Deleted clip.");
  } catch (error) {
    console.error(error);
    setRecordStatus("Could not delete clip.", "err");
  }
}

function updateRecordPreview() {
  const selected = findPhrase(ui.commandSelect.value);
  if (!selected) {
    return;
  }

  ui.previewEnglish.textContent = `${selected.english} (${selected.respectLabel}, ${selected.polarityLabel})`;
  ui.previewTamil.textContent = `${selected.tamil} (${selected.roman})`;

  const hasClip = state.clipIds.has(selected.id);
  ui.playRecordBtn.disabled = !hasClip;
  ui.deleteRecordBtn.disabled = !hasClip;
}

function setRecordStatus(message, kind = "") {
  ui.recordStatus.textContent = message;
  ui.recordStatus.classList.remove("ok", "err");
  if (kind) {
    ui.recordStatus.classList.add(kind);
  }
}

async function saveClip(id, blob) {
  if (state.db) {
    await dbPut({ id, blob, updatedAt: Date.now() });
  } else {
    state.memoryClips.set(id, blob);
  }
  state.clipIds.add(id);
}

async function getClip(id) {
  if (state.db) {
    const record = await dbGet(id);
    return record ? record.blob : null;
  }
  return state.memoryClips.get(id) || null;
}

async function deleteClip(id) {
  if (state.db) {
    await dbDelete(id);
  } else {
    state.memoryClips.delete(id);
  }
  state.clipIds.delete(id);
}

async function getClipIds() {
  if (state.db) {
    const keys = await dbGetAllKeys();
    return new Set(keys.map((key) => String(key)));
  }
  return new Set(state.memoryClips.keys());
}

function dbPut(record) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(STORE_NAME, "readwrite");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.objectStore(STORE_NAME).put(record);
  });
}

function dbGet(id) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(STORE_NAME, "readonly");
    tx.onerror = () => reject(tx.error);
    const req = tx.objectStore(STORE_NAME).get(id);
    req.onsuccess = () => resolve(req.result || null);
    req.onerror = () => reject(req.error);
  });
}

function dbDelete(id) {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(STORE_NAME, "readwrite");
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.objectStore(STORE_NAME).delete(id);
  });
}

function dbGetAllKeys() {
  return new Promise((resolve, reject) => {
    const tx = state.db.transaction(STORE_NAME, "readonly");
    tx.onerror = () => reject(tx.error);
    const req = tx.objectStore(STORE_NAME).getAllKeys();
    req.onsuccess = () => resolve(req.result || []);
    req.onerror = () => reject(req.error);
  });
}

function safeStorageGet(key, fallback = "") {
  try {
    const value = window.localStorage.getItem(key);
    return value ?? fallback;
  } catch (error) {
    console.error(error);
    return fallback;
  }
}

function safeStorageSet(key, value) {
  try {
    window.localStorage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
}

function buildPhraseVariants(bank) {
  const phrases = [];
  bank.forEach((entry) => {
    ["respectful", "casual"].forEach((respect) => {
      ["positive", "negative"].forEach((polarity) => {
        const form = entry.forms[respect][polarity];
        const english = polarity === "positive" ? entry.englishPositive : entry.englishNegative;
        phrases.push({
          id: `${entry.actionId}__${respect}__${polarity}`,
          actionId: entry.actionId,
          english,
          tamil: form.tamil,
          roman: form.roman,
          respect,
          polarity,
          respectLabel: respect === "respectful" ? "With respect" : "Without respect",
          polarityLabel: polarity === "positive" ? "Positive" : "Negative"
        });
      });
    });
  });
  return phrases;
}

function findPhrase(id) {
  return ALL_PHRASES.find((item) => item.id === id);
}

function randomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function shuffle(items) {
  const list = [...items];
  for (let i = list.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
}
