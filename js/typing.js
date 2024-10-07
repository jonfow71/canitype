function typing(testtype, testtime, candref) {

  var countDownSeconds = 0;
  var startTimerText = "";
  var textTyped = $('#typingInput');
  var currentLineNumber = 0;
  var totalCharacters = 0;
  var snum = 0; // used in scroll
  var inview = $(".inview");
  var typable = $(".typable");
  var speedInterval = 5; //a setting used to calc wpm
  var lastCorrectDate;
  var times = [];
  var millisInMinute = 1000 * 60; //60000
  var startTime = null;
  var errorCount = 0;
  var isEOL = false;
  var lineLetters = [];
  var originalTexts = [];
  var isEnded = false;
  var defaultFontFamily = "droid_sans_monoregular, courier, Tahoma, Sans-Serif";
  var defaultFontSize = "35px";
  var theStringContent = "";
  $("#timer").countdowntimer("destroy");
  var timeoutId = 0;
  var data = {
            "StrP1":
              {
                  "I1": ["A big appreciation to you","A big thank you","A great big thank you and welcome","A great many appreciations","A great many thanks","A huge appreciation","A huge thank you","A huge welcome","A huge welcoming appreciation","A hundred appreciations","A hundred hugs","A hundred thanks","A large appreciation","A large thank you","A large welcome","A million appreciations","A million hugs","A million thanks","A super big thank you","A super thanks and welcome","A thousand appreciations","A thousand hugs","A thousand thanks","A very big thank you","A very big welcome","A very large welcome","After all many ideas","After all my ideas","After all these ideas","After all those ideas","After all your ideas","As a concession","As a confirmation","As a courtesy","As a ratification","As a recognition","As an acceptance","As an acknowledgment","As an admission","As an affirmation","By blessing this communication is","By blessing this letter is","By her blessing this email is","By his blessing this card is","By mutual blessing this dispatch is","By my blessing this memo is","By our blessing this note is","By team blessing this mail is","By your blessing this report is","Communicating our acceptance","Communicating our acknowledgment","Communicating our admission","Communicating our affirmation","Communicating our concession","Communicating our confirmation","Communicating our courtesy","Communicating our praise","Communicating our ratification","Communicating our recognition","Disclosing our acceptance","Disclosing our acknowledgment","Disclosing our admission","Disclosing our affirmation","Disclosing our concession","Disclosing our confirmation","Disclosing our courtesy","Disclosing our praise","Disclosing our ratification","Disclosing our recognition","Expressing a concession","Expressing a confirmation","Expressing a courtesy","Expressing a praise","Expressing a ratification","Expressing a recognition","Expressing an acceptance","Expressing an acknowledgment","Expressing an admission","Expressing an affirmation","Feeling always obliged this dispatch is","Feeling greatly obliged this memo is","Feeling highly obliged this card is","Feeling humbly obliged this letter is","Feeling obliged this communication is","Feeling so obliged this report is","Feeling super obliged this note is","Feeling too obliged this email is","Feeling top obliged this mail is","Giving a concession","Giving a confirmation","Giving a courtesy","Giving a praise","Giving a ratification","Giving a recognition","Giving an acceptance","Giving an acknowledgment","Giving an admission","Giving an affirmation","Granting awareness this communication is","Granting general awareness this dispatch is","Granting her awareness this report is","Granting his awareness this note is","Granting manager awareness this mail is","Granting my awareness this letter is","Granting team awareness this email is","Granting their awareness this card is","Granting your awareness this memo is","I am announcing thank you","I am coming out with thank you","I am conveying thank you","I am deeply indebted to you","I am delivering thank you","I am enormously indebted to you","I am extensively indebted to you","I am extremely indebted to you","I am greatly indebted to you","I am grossly indebted to you","I am hugely indebted to you","I am incredibly indebted to you","I am indebted to you","I am indebted to you a colossal amount","I am indebted to you a dizzying amount","I am indebted to you a giant deal","I am indebted to you a great amount","I am indebted to you a great deal","I am indebted to you a huge amount","I am indebted to you a jumbo amount","I am indebted to you a lot","I am indebted to you a vast amount","I am indebted to you a whopping amount","I am indebted to you an awful amount","I am indebted to you an awful lot","I am indebted to you an oversized deal","I am indebted to you beyond words","I am indebted to you boundlessly","I am indebted to you extensively","I am indebted to you greatly","I am indebted to you immensely","I am indebted to you in excess","I am indebted to you inordinately","I am indebted to you limitlessly","I am indebted to you massively","I am indebted to you needlessly","I am indebted to you neverendingly","I am indebted to you over and above","I am indebted to you unmeasurably","I am making known thank you","I am massively indebted to you","I am monstrously indebted to you","I am putting into words thank you","I am reporting thank you","I am responding thank you","I am saying thank you","I am shouting out thank you","I am sincerely indebted to you","I am so indebted to you","I am stupendously indebted to you","I am super indebted to you","I am tremendously indebted to you","I am very indebted to you","I begin this call by thanking you","I begin this card thanking you","I begin this communication thanking you","I begin this dispatch thanking you","I begin this email thanking you","I begin this letter thanking you","I begin this mail thanking you","I begin this memo thanking you","I begin this note thanking you","I begin this report thanking you","I desire to inform you of my appreciation","I desire to let me extend my gratitude","I desire to say good job","I desire to say thanks","I desire to say well done","I desire to speak and say great job","I desire to tell you good job","I desire to tell you thanks","I desire to tell you well done","I expect to inform you of my appreciation","I expect to let me extend my gratitude","I expect to say good job","I expect to say thanks","I expect to say well done","I expect to speak and say great job","I expect to tell you good job","I expect to tell you thanks","I expect to tell you well done","I first lead this call by thanking you","I first lead this card thanking you","I first lead this communication thanking you","I first lead this dispatch thanking you","I first lead this email thanking you","I first lead this letter thanking you","I first lead this mail thanking you","I first lead this memo thanking you","I first lead this note thanking you","I first lead this report thanking you","I hope to inform you of my thanks","I hope to let me extend my gratitude","I hope to say good job","I hope to say thanks","I hope to say well done","I hope to speak and say great job","I hope to tell you good job","I hope to tell you thanks","I hope to tell you well done","I long to express appreciation","I long to inform you of my appreciation","I long to let me extend my gratitude","I long to say good job","I long to say thanks","I long to say well done","I long to speak and say great job","I long to tell you good job","I long to tell you thanks","I long to tell you well done","I need to inform you of my thanks","I need to let me extend my gratitude","I need to say good job","I need to say thanks","I need to say well done","I need to speak and say great job","I need to tell you good job","I need to tell you thanks","I need to tell you well done","I start this call by thanking you","I start this card thanking you","I start this communication thanking you","I start this dispatch thanking you","I start this email thanking you","I start this letter thanking you","I start this mail thanking you","I start this memo thanking you","I start this note thanking you","I start this report thanking you","I want to express appreciation","I want to express thanks","I want to inform you of my thanks","I want to let me extend my gratitude","I want to say good job","I want to say thanks","I want to say thanks to you","I want to say well done","I want to speak and say great job","I want to tell you good job","I want to tell you thanks","I want to tell you well done","I want to thank you","I will begin by expressing thanks","I will explain to you my gratefulness","I will let you read my gratefulness","I will start by saying thanks","I will tell you my gratitude","I wish to express appreciation","I wish to inform you of my thanks","I wish to let me extend my gratitude","I wish to say good job","I wish to say thanks","I wish to say thanks to you","I wish to say well done","I wish to speak and say great job","I wish to tell you good job","I wish to tell you thanks","I wish to tell you well done","I wish to thank you","I would like to express appreciation","I would like to inform you of my appreciation","I would like to let me extend my gratitude","I would like to say good job","I would like to say thanks","I would like to say well done","I would like to speak and say great job","I would like to tell you good job","I would like to tell you thanks","I would like to tell you well done","In any event of many thoughts","In any event of my thoughts","In any event of these thoughts","In any event of those thoughts","In any event of your thoughts","It is a breathtaking experience","It is a glories experience","It is a good joy","It is a gorgeous joy","It is a grand wonder","It is a great wonder","It is a magnificent joy","It is a marvelous experience","It is a splendid experience","It is a stunning wonder","It is a superb joy","It is a superior joy","It is an excellent experience","It is an impressing wonder","It is an outstanding wonder","It is the best thing","It is the biggest experience","It is the funniest experience","It is the grandest wonder","It is the greatest experience","It is the happiest thing","It is the highest experience","It is the loveliest wonder","It is the most considerable wonder","It is the most enormous joy","It is the most extravagant experience","It is the most extreme thing","It is the most immense joy","It is the most important experience","It is the most incredible experience","It is the most joyous experience","It is the most splendid thing","It is the most superb thing","It is the most towering wonder","It is the most wonderful thing","It is the nicest joy","It is the strongest thing","It is the very best thing",
                  "It was a beautiful alert of you","It was a beautiful idea of you","It was a beautiful pleasure of you","It was a beautiful proposal of you","It was a beautiful proposition of you","It was a beautiful recommendation of you","It was a beautiful suggestion of you","It was a beautiful thing of you","It was a beautiful thought of you","It was a beautiful warning of you","It was a great alert of you","It was a great idea of you","It was a great pleasure of you","It was a great proposal of you","It was a great proposition of you","It was a great recommendation of you","It was a great suggestion of you","It was a great thing of you","It was a great thought of you","It was a great warning of you","It was a lovely alert of you","It was a lovely idea of you","It was a lovely pleasure of you","It was a lovely proposal of you","It was a lovely proposition of you","It was a lovely recommendation of you","It was a lovely suggestion of you","It was a lovely thing of you","It was a lovely thought of you","It was a lovely warning of you","It was a nice alert of you","It was a nice idea of you","It was a nice pleasure of you","It was a nice proposal of you","It was a nice proposition of you","It was a nice recommendation of you","It was a nice suggestion of you","It was a nice thing of you","It was a nice thought of you","It was a nice warning of you","It was a super alert of you","It was a super idea of you","It was a super pleasure of you","It was a super proposal of you","It was a super proposition of you","It was a super recommendation of you","It was a super suggestion of you","It was a super thing of you","It was a super thought of you","It was a super warning of you","It was agreeable of you","It was amazing of you","It was amiable of you","It was appropriate of you","It was awesome of you","It was beautiful of you","It was better of you","It was charming of you","It was delightful of you","It was fantastic of you","It was fine of you","It was friendly of you","It was good of you","It was great of you","It was kind of you","It was lovely of you","It was marvelous of you","It was okay of you","It was pleasant of you","It was polite of you","It was proper of you","It was really awesome of you","It was really beautiful of you","It was really good of you","It was really lovely of you","It was really okay of you","It was really pleasant of you","It was really proper of you","It was really sweet of you","It was really terrific of you","It was really very good of you","It was so agreeable of you","It was so amiable of you","It was so appropriate of you","It was so friendly of you","It was so good of you","It was so great of you","It was so marvelous of you","It was so polite of you","It was so sympathetic of you","It was sweet of you","It was sympathetic of you","It was terrific of you","It was very amazing of you","It was very better of you","It was very charming of you","It was very delightful of you","It was very fantastic of you","It was very fine of you","It was very good of you","It was very kind of you","It was very really good of you","It was very wonderful of you","It was wonderful of you","Management desire to express appreciation","Management long to express appreciation","Management want to express appreciation","Management wish to express appreciation","Management would like to express appreciation","Management yearn to express appreciation","Many kind thanks","My colleague thanks you","My colleagues crave to express appreciation","My colleagues desire to express appreciation","My colleagues long to express appreciation","My colleagues want to express appreciation","My colleagues wish to express appreciation","My colleagues would like to express appreciation","My colleagues yearn to express appreciation","My coworker is grateful","My deputy is grateful","My deputy thanks you","My manager conveys thanks","My manager is grateful","My manager is shouting out thanks","My manager says it is charming of you","My manager says it was charming of you","My manager says it was good of you","My manager says it was kind of you","My manager says it was sweet of you","My manager thanks you","My supervisor is announcing thank you","My supervisor is coming out with thank you","My supervisor is conveying thank you","My supervisor is delivering thank you","My supervisor is grateful","My supervisor is making known thank you","My supervisor is putting into words thank you","My supervisor is reporting thank you","My supervisor is responding thank you","My supervisor is saying thank you","My supervisor is shouting out thank you","My supervisor thanks you","My team greatly appreciates","My team is grateful","My team is grateful to you","My team leader thanks you","My team thanks you","My very many thanks","No end of thanks","Notwithstanding many hopes","Notwithstanding my hopes","Notwithstanding these hopes","Notwithstanding those hopes","Notwithstanding your hopes","Numerous thanks","On account of many hopes","On account of many ideas","On account of many thoughts","On account of much understanding","On account of my hopes","On account of my ideas","On account of my thoughts","On account of my understanding","On account of that understanding","On account of these hopes","On account of these ideas","On account of these thoughts","On account of this understanding","On account of those hopes","On account of those ideas","On account of those thoughts","On account of your hopes","On account of your ideas","On account of your thoughts","On account of your understanding","Our advisor came in","Our advisor has arrived","Our agent arrived here","Our agent has appeared","Our analyst came in","Our analyst has arrived","Our architect arrived here","Our architect has appeared","Our assistant came in","Our assistant has arrived","Our auditor arrived here","Our auditor has appeared","Our chief operator arrived here","Our chief operator has appeared","Our clerk came in","Our clerk has arrived","Our comptroller arrived here","Our comptroller has appeared","Our coordinator came in","Our coordinator has arrived","Our designer arrived here","Our designer has appeared","Our director came in","Our director has arrived","Our dispatcher arrived here","Our dispatcher has appeared","Our engineer came in","Our engineer has arrived","Our examiner arrived here","Our examiner has appeared","Our expressed thanks","Our inspector came in","Our inspector has arrived","Our investigator arrived here","Our investigator has appeared","Our leader came in","Our leader has arrived","Our manager arrived here","Our manager has appeared","Our many thanks","Our many wishes of thanks","Our office manager arrived here","Our office manager has appeared","Our officer came in","Our officer has arrived","Our operator arrived here","Our operator has appeared","Our personnel officer came in","Our personnel officer has arrived","Our representative came in","Our representative has arrived","Our senior editor came in","Our senior editor has arrived","Our so many thanks","Our specialist arrived here","Our specialist has appeared","Our superintendent came in","Our superintendent has arrived","Our supervisor came in","Our supervisor has arrived","Our team craves to express appreciation","Our team desires to express appreciation","Our team longs to express appreciation","Our team wants to express appreciation","Our team wishes to express appreciation","Our team would like to express appreciation","Our team yearns to express appreciation","Our technician arrived here","Our technician has appeared","Our trainee came in","Our trainee has arrived","Our very many thanks","Our worker arrived here","Our worker has appeared","Putting out the acceptance","Putting out the acknowledgment","Putting out the admission","Putting out the affirmation","Putting out the concession","Putting out the confirmation","Putting out the courtesy","Putting out the praise","Putting out the ratification","Putting out the recognition","Showing a big greeting this memo is","Showing a grand greeting this card is","Showing a great greeting this report is","Showing a greeting this communication is","Showing a healthy greeting this dispatch is","Showing a large greeting this note is","Showing a long greeting this mail is","Showing a token greeting this email is","Showing a wide greeting this letter is","So a great many thanks","Taking on a big greeting this memo is","Taking on a grand greeting this card is","Taking on a great greeting this report is","Taking on a greeting this communication is","Taking on a hearty greeting this dispatch is","Taking on a large greeting this note is","Taking on a long greeting this mail is","Taking on a token greeting this email is","Taking on a wide greeting this letter is","Thank you very much","Thanks so much","Thanks very much","That is really awesome of you","That is really beautiful of you","That is really lovely of you","That is really okay of you","That is really pleasant of you","That is really proper of you","That is really sweet of you","That is really terrific of you","That is really very good of you","That is so agreeable of you","That is so amiable of you","That is so appropriate of you","That is so friendly of you","That is so good of you","That is so great of you","That is so marvelous of you","That is so polite of you","That is so sympathetic of you","That is very amazing of you","That is very better of you","That is very charming of you","That is very delightful of you","That is very fantastic of you","That is very fine of you","That is very kind of you","That is very really good of you","That is very wonderful of you","That was absolutely amiable of you","That was absolutely awesome of you","That was absolutely beautiful of you","That was absolutely better of you","That was absolutely fantastic of you","That was absolutely fine of you","That was absolutely good of you","That was absolutely kind of you","That was absolutely marvelous of you",
                  "That was absolutely okay of you","That was absolutely polite of you","That was absolutely really good of you","That was absolutely sympathetic of you","That was absolutely very good of you","That was extremely amiable of you","That was extremely awesome of you","That was extremely beautiful of you","That was extremely better of you","That was extremely fantastic of you","That was extremely fine of you","That was extremely good of you","That was extremely kind of you","That was extremely marvelous of you","That was extremely okay of you","That was extremely polite of you","That was extremely sympathetic of you","That was extremely very good of you","That was incredibly agreeable of you","That was incredibly amazing of you","That was incredibly appropriate of you","That was incredibly charming of you","That was incredibly delightful of you","That was incredibly friendly of you","That was incredibly great of you","That was incredibly lovely of you","That was incredibly marvelous of you","That was incredibly pleasant of you","That was incredibly proper of you","That was incredibly sweet of you","That was incredibly terrific of you","That was incredibly wonderful of you","That was really amiable of you","That was really awesome of you","That was really beautiful of you","That was really better of you","That was really fantastic of you","That was really fine of you","That was really good of you","That was really kind of you","That was really marvelous of you","That was really nice good of you","That was really okay of you","That was really polite of you","That was really sympathetic of you","That was really very good of you","That was so extremely good of you","The advisor came here","The advisor is here","The agent was there","The agent went there","The analyst came here","The analyst is here","The architect was there","The architect went there","The assistant came here","The assistant is here","The auditor was there","The auditor went there","The chief operator was there","The chief operator went there","The clerk came here","The clerk is here","The company advisor is at the door","The company agent is in the hall","The company analyst is at the door","The company architect is in the hall","The company assistant is at the door","The company auditor is in the hall","The company chief operator is in the hall","The company clerk is at the door","The company comptroller is in the hall","The company coordinator is at the door","The company designer is in the hall","The company director is at the door","The company dispatcher is in the hall","The company engineer is at the door","The company examiner is in the hall","The company inspector is at the door","The company investigator is in the hall","The company is coming out with thank you","The company is making known thank you","The company is putting into words thank you","The company is responding thank you","The company is shouting out thank you","The company leader is at the door","The company manager is in the hall","The company office manager is in the hall","The company officer is at the door","The company operator is in the hall","The company personnel officer is at the door","The company representative is at the door","The company senior editor is at the door","The company specialist is in the hall","The company superintendent is at the door","The company supervisor is at the door","The company technician is in the hall","The company trainee is at the door","The company worker is in the hall","The comptroller was there","The comptroller went there","The coordinator came here","The coordinator is here","The designer was there","The designer went there","The director came here","The director craves to express appreciation","The director desires to express appreciation","The director is here","The director longs to express appreciation","The director wants to express appreciation","The director wishes to express appreciation","The director would like to express appreciation","The director yearns to express appreciation","The dispatcher was there","The dispatcher went there","The engineer came here","The engineer is here","The examiner was there","The examiner went there","The group is announcing thank you","The group is coming out with thank you","The group is conveying thank you","The group is delivering thank you","The group is making known thank you","The group is putting into words thank you","The group is reporting thank you","The group is responding thank you","The group is saying thank you","The group is shouting out thank you","The inspector came here","The inspector is here","The investigator was there","The investigator went there","The leader came here","The leader is here","The manager was there","The manager went there","The office craves to express appreciation","The office desires to express appreciation","The office longs to express appreciation","The office manager was there","The office manager went there","The office wants to express appreciation","The office wishes to express appreciation","The office would like to express appreciation","The office yearns to express appreciation","The officer came here","The officer is here","The operator was there","The operator went there","The personnel officer came here","The personnel officer is here","The representative came here","The representative is here","The senior advisor is not too far away","The senior agent is in reception","The senior analyst is not too far away","The senior architect is in reception","The senior assistant is not too far away","The senior auditor is in reception","The senior chief operator is in reception","The senior clerk is not too far away","The senior comptroller is in reception","The senior coordinator is not too far away","The senior designer is in reception","The senior director is not too far away","The senior dispatcher is in reception","The senior editor came here","The senior editor is here","The senior editor is not too far away","The senior engineer is not too far away","The senior examiner is in reception","The senior inspector is not too far away","The senior investigator is in reception","The senior leader is not too far away","The senior manager is in reception","The senior office manager is in reception","The senior officer is not too far away","The senior operator is in reception","The senior personnel officer is not too far away","The senior representative is not too far away","The senior specialist is in reception","The senior superintendent is not too far away","The senior supervisor is not too far away","The senior technician is in reception","The senior trainee is not too far away","The senior worker is in reception","The specialist was there","The specialist went there","The superintendent came here","The superintendent is here","The supervisor came here","The supervisor is here","The technician was there","The technician went there","The trainee came here","The trainee is here","The worker was there","The worker went there","There are so many acceptances","There are so many admittances","There are so many allowances","There are so many appreciations","There are so many concessions","There are so many confessions","There are so many courtesies","There are so many grants","There are so many ideas","There are so many realizations","There are so many thoughts","There is so much acceptance","There is so much confirmation","There is so much praise","There is so much recognition","There is so much to ask","There is so much to avail","There is so much to convey","There is so much to declare","There is so much to examine","There is so much to glimpse","There is so much to look over","There is so much to ogle","There is so much to pronounce","There is so much to prospect","There is so much to regard","There is so much to remark","There is so much to say","There is so much to see","There is so much to speak","There is so much to tell","There is so much to voice","There is to be a chat","There is to be a consideration","There is to be a consultation","There is to be a conversation","There is to be a debate","There is to be a dialogue","There is to be a discourse","There is to be a dispute","There is to be a review","There is to be a scrutiny","There is to be a seminar","There is to be a study","There is to be a talk","There is to be a treatment","There is to be an analysis","There is to be an argument","There is to be an examination","There is to be an exchange of views","There is to be an exploration","There was a big hand","There was a lot of stamping","There was a lot of standing","There was a lot to check out","There was a lot to consider","There was a lot to evaluate","There was a lot to eyeball","There was a lot to have a gander at","There was a lot to inspect","There was a lot to observe","There was a lot to regard","There was a lot to review","There was a lot to scan","There was a lot to scrutinize","There was a lot to size up","There was a lot to survey","There was a lot to thank","There was much to assess","There was much to chew over","There was much to compare","There was much to evaluate","There was much to examine","There was much to judge","There was much to ponder","There was much to reflect on","There was much to review","There was much to study","There was much to think about","There was much to turnover","There was so much cheering","There was so much clapping","There was so much whistling","There were many analyses","There were many articles","There were many cheers","There were many commentaries","There were many criticisms","There were many evaluations","There were many investigations","There were many judgements","There were many pieces","There were many probes","There were many ratings","There were many write-ups","There were so many acclamations","There were so many accolades","There were so many cheers","There were so many hurrahs","There were so many praises","There were so many whistles",
                  "This is to thank you","To begin a big greeting this memo is","To begin a grand greeting this card is","To begin a great greeting this report is","To begin a greeting this communication is","To begin a hearty greeting this dispatch is","To begin a large greeting this note is","To begin a long greeting this mail is","To begin a token greeting this email is","To begin a wide greeting this letter is","Toward a concession","Toward a confirmation","Toward a courtesy","Toward a praise","Toward a ratification","Toward a recognition","Toward an acceptance","Toward an acknowledgment","Toward an admission","Toward an affirmation","Under a concession","Under a confirmation","Under a courtesy","Under a praise","Under a ratification","Under a recognition","Under an acceptance","Under an acknowledgment","Under an admission","Under an affirmation","Very many thanks","Voicing our acceptance","Voicing our acknowledgment","Voicing our admission","Voicing our affirmation","Voicing our concession","Voicing our confirmation","Voicing our courtesy","Voicing our praise","Voicing our ratification","Voicing our recognition","We appreciate you","We are coming out with thank you","We are deeply indebted to you","We are enormously indebted to you","We are extensively indebted to you","We are extremely indebted to you","We are greatly indebted to you","We are grossly indebted to you","We are hugely indebted to you","We are incredibly indebted to you","We are indebted to you","We are indebted to you a colossal amount","We are indebted to you a dizzying amount","We are indebted to you a giant deal","We are indebted to you a great amount","We are indebted to you a great deal","We are indebted to you a huge amount","We are indebted to you a jumbo amount","We are indebted to you a lot","We are indebted to you a vast amount","We are indebted to you a whopping amount","We are indebted to you an awful amount","We are indebted to you an awful lot","We are indebted to you an oversized deal","We are indebted to you beyond words","We are indebted to you boundlessly","We are indebted to you extensively","We are indebted to you greatly","We are indebted to you immensely","We are indebted to you in excess","We are indebted to you inordinately","We are indebted to you limitlessly","We are indebted to you massively","We are indebted to you needlessly","We are indebted to you neverendingly","We are indebted to you over and above","We are indebted to you unmeasurably","We are making known thank you","We are massively indebted to you","We are monstrously indebted to you","We are putting into words thank you","We are responding thank you","We are shouting out thank you","We are sincerely indebted to you","We are so indebted to you","We are stupendously indebted to you","We are super indebted to you","We are tremendously indebted to you","We are very indebted to you","We crave to express appreciation","We desire to express appreciation","We gratefully appreciate","We greatly appreciate","We long to express appreciation","We open this call by thanking you","We open this card thanking you","We open this communication thanking you","We open this dispatch thanking you","We open this email thanking you","We open this letter thanking you","We open this mail thanking you","We open this memo thanking you","We open this note thanking you","We open this report thanking you","We thank you a lot","We thank you so much","We thank you very much","We want to express appreciation","We wish to express appreciation","We would like to express appreciation","We yearn to express appreciation","With a big greeting this memo is","With a big smile this memo is","With a grand greeting this card is","With a grand smile this card is","With a great greeting this report is","With a great smile this report is","With a greeting this communication is","With a healthy greeting this dispatch is","With a hearty smile this dispatch is","With a large greeting this note is","With a large smile this note is","With a long greeting this mail is","With a long smile this mail is","With a smile this communication is","With a token greeting this email is","With a token smile this email is","With a wide greeting this letter is","With a wide smile this letter is","With acceptance this communication is","With acknowledgement this communication is","With her acceptance this card is","With her acknowledgement this card is","With his acceptance this report is","With his acknowledgement this report is","With manager acceptance this dispatch is","With manager acknowledgement this dispatch is","With my acceptance this letter is","With my acknowledgement this letter is","With our acceptance this memo is","With our acknowledgement this memo is","With team acceptance this mail is","With team acknowledgement this mail is","With their acceptance this email is","With their acknowledgement this email is","With your acceptance this note is","With your acknowledgement this note is","Yet against many dreams","Yet against my dreams","Yet against these dreams","Yet against those dreams","Yet against your dreams","Your advisor has shown up","Your advisor is inside","Your agent has walked in","Your agent is outside","Your analyst has shown up","Your analyst is inside","Your architect has walked in","Your architect is outside","Your assistant has shown up","Your assistant is inside","Your auditor has walked in","Your auditor is outside","Your chief operator has walked in","Your chief operator is outside","Your clerk has shown up","Your clerk is inside","Your coordinator has shown up","Your coordinator is inside","Your designer has walked in","Your designer is outside","Your director has shown up","Your director is inside","Your dispatcher has walked in","Your dispatcher is outside","Your engineer has shown up","Your engineer is inside","Your examiner has walked in","Your examiner is outside","Your inspector has shown up","Your inspector is inside","Your investigator has walked in","Your investigator is outside","Your leader has shown up","Your leader is inside","Your manager has walked in","Your manager is outside","Your office manager has walked in","Your office manager is outside","Your officer has shown up","Your officer is inside","Your operator has walked in","Your operator is outside","Your personnel officer has shown up","Your personnel officer is inside","Your representative has shown up","Your representative is inside","Your senior editor has shown up","Your senior editor is inside","Your specialist has walked in","Your specialist is outside","Your superintendent has shown up","Your superintendent is inside","Your supervisor has shown up","Your supervisor is inside","Your technician has walked in","Your technician is outside","Your trainee has shown up","Your trainee is inside","Your worker has walked in","Your worker is outside"],
                  "I2": ["for the"],
                  "I3": ["account","advertisement","advice","alert","almanac","announcement","archive","bill","binder","book","booklet","box","brief","broadcast","bulletin","calendar","case","catalog","certificate","chart","charter","chat","chronicle","circular","command","contract","courseware","data","declaration","deed","demand","description","detail","detailed outline","details","dictation","directions","directive","document","documentation","documents","electronic chat","email","envelope","evidence","exposition","facts","figures","file","flyer","folder","form","freeware","groupware","guidance","guide","handbook","handout","image","info","instance","instructions","inventory","leaflet","letter","list","log","mail","mandate","manual","materials","memo","message","news","note","notice","notification","online message","order","pamphlet","paper","paperwork","particulars","portfolio","posting","price list","proceedings","program","prospectus","publication","record","register","report","review","ring binder","roll","roster","schedule","shareware","sheet","software","specification","spreadsheet","statement","statistics","stipulation","system","transcript","voice note","wallet","warning","word","yearbook"],
                  "I4": ["acquired","addressed","assigned","brought","channeled","conveyed","derived","directed","dispatched","emailed","encountered","faxed","forwarded","gotten","granted","handed in","handed over","mailed","moved","passed on","picked up","posted","presented","received","redirected","relinquished","relocated","remitted","sent","shifted","surrendered","taken on","transferred","transmitted","turned over","uploaded","wired"],
                  "I5": ["a little while ago.","a little while back.","a little while recently.","a short time ago.","a short time back.","earlier noon today.","earlier on today.","earlier this afternoon.","earlier this evening.","earlier this month.","earlier this morning.","earlier this week.","earlier this year.","early afternoon today.","early at midday.","early at noon.","early morning last.","in recent days.","in recent hours.","in recent months.","in recent times.","in recent weeks.","in recent years.","just a bit recently.","just earlier on.","just last afternoon.","just last evening.","just last morning.","just quite recently.","just this afternoon.","just this evening.","just this morning.","just very recently.","last early afternoon.","last early evening.","last early morning.","much earlier on.","much earlier yesterday.","not earlier on.","not so long ago.","not so recently.","not that long ago.","not that long back.","not that recently.","not too long ago.","so very recently.","some time ago.","some time back.","somewhat recently.","the day before last.","the day before.","this last month.","this last time.","this last week.","this very afternoon.","this very evening.","this very morning.","today at midday.","today at noon.","yesterday afternoon.","yesterday at midday.","yesterday at noon.","yesterday evening.","yesterday midday.","yesterday morning.","yesterday noon."],
                  "I6": ["It is","So it is","So that is","So this is","Such","That is","This is","To that end","To this end","Well it is","Well that is","Well this is","What"],
                  "I7": ["a beautiful","a beyond belief","a blissful","a blooming","a breathtaking","a brilliant","a captivating","a champion","a characteristic","a charming","a congenial","a courageous","a cracking","a creative","a dazzling","a delicious","a delightful","a divine","a dramatic","a dreamlike","a dreamy","a dynamite","a fabulous","a fanciful","a fantabulous","a fantastic","a fascinating","a favorable","a formidable","a gentle","a glorious","a gorgeous","a graceful","a grand","a gratifying","a handsome","a heavenly","a joyful","a lavish","a legendary","a lofty","a lovely","a luxuriant","a magical","a magnificent","a marvelous","a marvelous","a massive","a matchless","a mesmerizing","a miraculous","a monumental","a mythical","a nifty","a noble","a notable","a noteworthy","a novel","a peerless","a perfect","a phantasmal","a phenomenal","a picturesque","a pleasant","a pleasing","a pleasurable","a poetic","a positive","a powerful","a pretty","a prime","a quaint","a radiant","a radical","a rattling","a ravishing","a remarkable","a ripping","a romantic","a satisfying","a scenic","a scrumptious","a sensational","a shapely","a slick","a smart","a smashing","a sound","a sparkling","a special","a spectacular","a spiffing","a splendid","a staggering","a startling","a stately","a statuesque","a stellar","a sterling","a striking","a stunning","a stupefying","a stupendous","a sublime","a super","a superb","a superhuman","a superior","a supernal","a surpassing","a surprising","a surreal","a surrealistic","a swell","a tantalizing","a terrific","a thrilling","a tiptop","a topnotch","a towering","a transcendent","a tremendous","a way out","a wayward","a welcome","a winning","a wonderful","a wondrous","an admirable","an adorable","an agreeable","an amazing","an appealing","an arbitrary","an astonishing","an astounding","an attractive","an audacious","an awesome","an elegant","an enchanting","an enjoyable","an enormous","an enthralling","an enticing","an entrancing","an excellent","an exceptional","an excessive","an exciting","an exhilarating","an exotic","an exquisite","an extraordinary","an extravagant","an extreme","an exuberant","an ideal","an idealistic","an imaginary","an imaginative","an imagined","an immense","an impressive","an incredible","an inexplicable","an ingenious","an inspiring","an inventive","an irresistible","an original","an out of the ordinary","an out of this world","an outlandish","an outrageous","an outstanding","an overstated","an overwhelming","an unanticipated","an unbelievable","an unconventional","an unearthly","an unequalled","an unexpected","an unexplainable","an unforeseen","an unparalleled","an unprecedented","an unpredicted","an unreal","an unsurpassed"],
                  "I8": ["aim","blueprint","course of action","design","device","enterprise","formula","game plan","goal","idea","initiative","intention","line of action","move","objective","plan","plan of action","procedure","program","project","proposal","proposition","recipe","recommendation","scheme","shift","stratagem","strategy","suggestion","system","tactic","venture"],
                  "I9": ["to afford us","to allocate to us","to allot us","to assign us","to bestow us","to come up with","to confer us","to contribute us","to deliver us with","to disburse us","to dispense us","to distribute us with","to donate us","to endow us","to endue us","to equip us with","to furnish us with","to give us","to grant us","to impart us","to lavish us","to make available to us","to outfit us","to proffer us","to provide us with","to serve us","to shower us","to supply us with","to transfer us with"],
                  "I10": ["the background","the data","the details","the documentation","the dossier","the evidence","the facts","the features","the figures","the fuel","the information","the input","the intelligence","the material","the metrics","the particulars","the points","the proof","the report","the return","the specifics","the statement","the statistics","these details","these facts","these features","these figures","these metrics","these particulars","these points","these specifics","these statistics","those details","those facts","those features","those figures","those metrics","those particulars","those points","those specifics","those statistics"],
                  "I11": ["extremely","most","quite","really","so really","so very","that very","this very"],
                  "I12": ["belatedly.","bit by bit.","bluntly.","briskly.","calmly.","carefully.","casually.","cautiously.","crawlingly.","deliberately.","dimly.","drowsily.","expeditiously.","fast.","gently.","gradually.","heavily.","hurriedly.","immediately.","in dribs and drabs.","inactively.","increasingly.","incrementally.","indolently.","instantly.","lackadaisically.","languidly.","lately.","leisurely.","lethargically.","lingeringly.","listlessly.","little by little.","moderately.","one step at a time.","peacefully.","piecemeal.","ploddingly.","ponderously.","progressively.","promptly.","quickly.","rapidly.","recently.","reluctantly.","sleepily.","sluggishly.","so softly.","soberly.","speedily.","steadily.","step by step.","swiftly.","tediously.","unhurriedly.","unpunctually.","without haste."],
                  "I13": ["As a reply to","As a response to","As regards to","In reply to","In response to","Regarding","With regards to","With reply to","With response to"],
                  "I14": ["a few","a lot of","many","plenty of","quite a few","quite a lot of","several","so many","some"],
                  "I15": ["alternate","alternating","different","differing","dissimilar","distinct","diverse","further","individual","particular","related","separate","similar","unique","unlike","unrelated","varied","various","varying"],
                  "I16": ["arguments","assemblies","comments","communications","consultations","conversations","debates","discussions","disputes","expressions","forums","get togethers","meetings","observations","summits","talks"],
                  "I17": ["on","in","about"],
                  "I18": ["the","this","that"],
                  "I19": ["affair,","area,","business,","case,","debate,","issue,","item,","matter,","occasion,","point,","problem,","proceeding,","question,","subject,","theme,","topic,"],
                  "I20": ["I am emailing this to","I am writing this to","I am writing to","I await to","I desire to","I expect to","I hope to","I intend to","I thought to","I want to","I wish to","I would be happy to","I would like to","I would love to"],
                  "I21": ["appeal","ask","ask for","beg","call","encourage","invite","offer","persuade","put to","request","urge"],
                  "I22": ["you and your associates","you and your colleagues","you and your companions","you and your contractors","you and your coworkers","you and your employees","you and your fellow workers","you and your hires","you and your members of staff","you and your partners","you and your personnel","you and your staff","you and your team","you and your teammates","you and your workers","you and your workforce","you and your workmates","your associates and you","your colleagues and you","your companions and you","your contractors and you","your coworkers and you","your employees and you","your fellow workers and you","your hires and you","your members of staff and you","your partners and you","your personnel and you","your staff and you","your team and you","your teammates and you","your workers and you","your workforce and you","your workmates and you"],
                  "I23": ["to attend","to be at","to be present at","to come to","to go to","to join us at","to participate in","to take part in"],
                  "I24": ["my","our","the"],
                  "I25": ["appointment","assembly","association","briefing","collection","competition","conference","congregation","congress","contest","convention","council","debate","discussion","event","experience","forum","game","gathering","get together","government","hearing","inquiry","interview","investigation","junction","mass","match","meeting","meetings","merger","party","presentation","rally","rendezvous","reunion","seminar","session","show","summit","symposium","talk","tournament","townhall","trial","union","workshop"],
                  "I26": ["which","that"],
                  "I27": ["is to be held","is to be","is located","is being held"],
                  "I28": ["RAND_NAME"],
                  "I29": ["central","general","leading","main","primary","principal","secondary"],
                  "I30": ["auditorium","briefing","conference","congress","convention","exhibit","exhibition","exposition","huddle","meeting","town","trade"],
                  "I31": ["area.","center.","gallery.","hall.","hotel.","house.","lobby.","lodge.","motel.","office.","place.","quarters.","resort.","room.","space.","venue."],
                  "I32": ["This is anticipated","This is assumed","This is believed","This is considered","This is due","This is envisaged","This is expected","This is forecast","This is predicted","This is required","This is supposed","This is thought"],
                  "I33": ["to appear","to arise","to arrive","to be","to become","to come","to come about","to happen","to occur","to show up","to take place","to turn out"],
                  "I34": ["this","next","on"],
                  "I35": ["RAND_WEEKDAY"],
                  "I36": ["after breakfast","after lunch","after work","before breakfast","before lunch","before noon","before work","early afternoon","early evening","early morning","early on","late afternoon","late evening"],
                  "I37": ["this month.","next month.","this year.","next year.","this week.","next week."],
                  "I38": ["Please consult the attached","Please open the attached","Please read the attached","Please refer to the attached","Please see the attached","Please view the attached"],
                  "I39": ["database","image","presentation","presentation","spreadsheet","word document"],
                  "I40": ["file","form","record","release","report","summary"],
                  "I41": ["for further details","for further information","for more details","for more information"],
                  "I42": ["about our","concerning our","regarding our"],
                  "I43": ["drives.","efforts.","goals.","initiatives.","programs.","projects."],
                  "I44": ["A bulletin","A communication","A file","A letter","A memo","A message","A note","A notification","A posting","A report","A revision","A tweet","An email","An update"],
                  "I45": ["will be","will get"],
                  "I46": ["circulated","distributed","forwarded","given out","handed out","issued","presented","provided","published","sent out","shared","supplied"],
                  "I47": ["after a bit.","after some time.","any day now.","any day soon.","any time now.","at a future date.","at a future time.","at a later date.","at a later time.","at some point in the future.","before you know it.","eventually.","in a day or two.","in a few days.","in a little while.","in a minute.","in a moment.","in a while.","in an instant.","in due course.","in due time.","in no time.","in the future.","in the near future.","in time to come.","in time.","not before long.","one day.","presently.","shortly.","some day.","sometime later.","sometime soon.","soon.","sooner or later."]
              },
            "StrP2":
              {
                "I1": ["Does it come how long?","Does it come how?","Does it come when?","Does it get how much?","Does it get what?","Does it go what?","Does it go when?","Does it go where?","Does it know how?","Does it know where?","Does it know who?","Does it make how long?","Does it make what?","Does it make who?","Does it say when?","Does it say where?","Does it say who?","Does it see how?","Does it see which?","Does it see why?","Does it take how much?","Does it take long?","Does it take what?","Does it think how long?","Does it think how?","Does it think which?","Does it want how much?","Does it want what?","Does it want which?","How does it know?","How does it look?","How does it make?","How does it take?","How does it want?","How long does it know?","How long does it take?","How long does it try?","How long does it want?","How long does it work?","How much does it feel?","How much does it know?","How much does it need?","How much does it want?","How much does it work?","What does it make?","What does it need?","What does it say?","What does it try?","What does it want?","When does it come?","When does it do?","When does it give?","When does it use?","When does it work?","Where does it become?","Where does it come from?","Where does it go?","Where does it know?","Where does it think?","Which does it become?","Which does it know?","Which does it like?","Which does it tell?","Which does it want?","Who does it call?","Who does it get?","Who does it know?","Who does it see?","Who does it take?","Why does it call?","Why does it come?","Why does it make?","Why does it say?","Why does it think?"],
                "I2": ["There","It"],
                "I3": ["could be","could had been","could have been","could not be","could not had been","could not have been","had been","had not been","has been","has got to be","has not been","has not got to be","has not to be","has to be","must be","must had been","must have been","must not be","must not had been","must not have been","should be","should had been","should have been","should not be","should not had been","should not have been","were not to be","were to be","would be","would had been","would have been","would not be","would not had been","would not have been"],
                "I4": ["areas","books","businesses","cases","companies","components","concepts","concerns","countries","courses","days","dents","details","entities","facts","governments","groups","homes","jobs","lives","materials","men","money","months","numbers","options","parts","people","places","points","problems","programs","questions","rights","sections","states","stories","studies","systems","things","ways","weeks","women","words","works","worlds","years"],
                "I5": ["almost always","almost frequently","always","at intervals","at random","at times","consistently","constantly","every so often","frequently","from time to time","hardly","hardly ever","here and there","infrequently","intermittently","invariably","irregularly","nearly sometimes","normally","not regularly","now and again","now and then","occasionally","off and on","often","on occasion","once in a blue moon","once in a while","once or twice","periodically","perpetually","rarely","recurrently","routinely","scarcely","seldom","sometimes","sporadically","typically","unceasingly","uncommonly","unusually","usually"],
                "I6": ["you do not have.","you do not need.","you have not need.","you have to do.","you have to have.","you have to need.","you need not do.","you need not have.","you need to do.","you need to have."],
                "I7": ["Additionally,","Although,","As follows,","But also,","Despite,","Event though,","Firstly,","For consideration,","For example,","For instance,","Furthermore,","However,","In addition,","In spite of,","Moreover,","Mostly,","Nonetheless,","Notwithstanding,","Secondly,","Thirdly,","To begin with,","To list as follows,","To sum up,","Yet,"],
                "I8": ["ability","abroad","abuse","access","accident","account","action","active","activity","actor","addition","address","administration","adult","advance","advantage","advertising","affect","agency","agent","agreement","airline","airport","alarm","alternative","ambition","amount","analysis","analyst","anger","angle","animal","annual","answer","anxiety","anybody","anything","anywhere","apartment","appeal","appearance","apple","application","appointment","argument","army","arrival","article","aside","aspect","assignment","assist","assistance","assistant","associate","association","assumption","atmosphere","attack","attempt","attention","attitude","audience","author","average","award","awareness","baby","background","bake","balance","ball","band","bank","base","baseball","basis","basket","bath","bathroom","battle","beach","bear","beat","beautiful","bedroom","beer","beginning","bell","belt","bench","bend","benefit","beyond","bicycle","bike","bill","bird","birth","birthday","bite","bitter","black","blame","blank","blind","block","blood","blow","blue","boat","body","bone","bonus","book","boot","border","boss","bother","bottle","bottom","bowl","boyfriend","brain","branch","brave","bread","break","breakfast","breast","breath","brick","bridge","brief","brilliant","broad","brother","brown","brush","buddy","budget","building","bunch","burn","button","buyer","cabinet","cable","cake","calendar","call","calm","camera","camp","campaign","cancel","cancer","candidate","candle","candy","capital","card","care","career","carpet","carry","case","cash","catch","category","cause","celebration","cell","chain","chair","challenge","champion","championship","chance","change","channel","chapter","character","charge","charity","chart","check","cheek","chemical","chemistry","chest","chicken","child","childhood","chip","chocolate","choice","church","cigarette","city","claim","class","classic","classroom","clerk","click","client","climate","clock","closet","clothes","cloud","club","clue","coach","coast","coat","code","coffee","cold","collar","collection","college","combination","combine","comfort","comfortable","command","comment","commercial","commission","committee","common","communication","community","company","comparison","complaint","complex","computer","concentrate","concept","concern","concert","conclusion","condition","confidence","conflict","confusion","connection","consequence","consideration","consist","constant","construction","contact","context","contract","contribution","control","conversation","convert","cook","cookie","copy","corner","cost","count","counter","country","county","couple","courage","court","cousin","cover","crack","craft","crash","crazy","cream","creative","credit","crew","criticism","cross","culture","currency","current","curve","customer","cycle","damage","dance","dare","dark","daughter","dead","deal","dealer","dear","death","debt","decision","deep","definition","degree","delay","delivery","demand","department","departure","dependent","deposit","depression","depth","description","design","designer","desire","desk","detail","development","device","diamond","diet","difference","difficulty","dimension","dinner","direction","director","dirt","disaster","discipline","discount","discussion","disease","dish","disk","display","distance","distribution","district","divide","doctor","door","double","doubt","draft","drag","drama","draw","drawer","drawing","dream","dress","drink","drive","driver","drop","drunk","dump","dust","duty","earth","ease","east","economics","economy","edge","editor","education","effect","effective","efficiency","effort","election","elevator","emergency","emotion","emphasis","employ","employee","employer","employment","energy","engine","engineer","engineering","entertainment","enthusiasm","entrance","entry","environment","equal","equipment","equivalent","error","escape","essay","establishment","estate","estimate","evidence","exam","examination","example","exchange","excitement","excuse","exercise","exit","experience","expert","explanation","expression","extension","extent","external","extreme","face","fact","factor","fail","failure","fall","familiar","family","farm","farmer","father","fault","fear","feature","feed","feedback","feel","feeling","female","field","fight","figure","fill","film","final","finance","finding","finger","finish","fire","fish","fishing","flight","floor","flow","flower","focus","fold","following","food","foot","football","force","forever","formal","fortune","foundation","frame","freedom","friend","friendship","front","fruit","fuel","function","funeral","funny","gain","garage","garbage","garden","gate","gather","gear","gene","gift","girl","girlfriend","glad","glass","glove","goal","gold","golf","government","grab","grade","grand","grandfather","grandmother","grass","green","grocery","ground","growth","guarantee","guard","guess","guest","guidance","guide","guitar","habit","hair","half","handle","hang","harm","hate","head","health","hearing","heart","heat","heavy","height","hell","hello","help","hide","high","highlight","highway","hire","historian","history","hold","hole","holiday","home","homework","honey","hook","horror","horse","hospital","host","hotel","hour","house","housing","human","hunt","hurry","hurt","husband","idea","ideal","illegal","imagination","impact","implement","importance","impress","impression","improvement","incident","income","increase","independence","independent","indication","individual","industry","inevitable","inflation","influence","initial","initiative","injury","insect","inside","inspection","inspector","instance","instruction","insurance","intention","interaction","interest","internal","international","internet","interview","introduction","investment","iron","island","item","jacket","joint","joke","judge","judgment","juice","jump","junior","jury","keep","kick","kill","king","kiss","kitchen","knee","knife","knowledge","lack","ladder","lady","lake","land","landscape","language","laugh","lawyer","layer","lead","leadership","league","leather","leave","length","lesson","level","library","life","lift","light","limit","line","link","list","listen","literature","living","load","loan","lock","look","loss","love","luck"],
                "I9": ["and","or"],
                "I10": ["local.","location.","lunch.","machine.","magazine.","mail.","maintenance.","major.","make.","male.","mall.","management.","manner.","manufacturer.","march.","mark.","market.","marketing.","marriage.","master.","match.","mate.","material.","math.","matter.","maximum.","maybe.","meal.","meaning.","measurement.","meat.","media.","medicine.","medium.","meet.","member.","membership.","memory.","mention.","menu.","mess.","metal.","method.","middle.","midnight.","might.","milk.","mind.","mine.","minimum.","minor.","minute.","mirror.","miss.","mission.","mistake.","mixture.","mobile.","mode.","model.","moment.","money.","monitor.","mood.","mortgage.","most.","mother.","motor.","mountain.","mouse.","mouth.","move.","movie.","muscle.","music.","nail.","name.","nasty.","nation.","national.","native.","natural.","nature.","neat.","necessary.","neck.","negative.","negotiation.","nerve.","network.","news.","newspaper.","night.","nobody.","noise.","normal.","north.","nose.","nothing.","notice.","novel.","number.","nurse.","object.","objective.","obligation.","occasion.","offer.","office.","officer.","official.","opening.","operation.","opinion.","opportunity.","opposite.","option.","orange.","order.","ordinary.","organization.","original.","outcome.","outside.","owner.","pace.","pack.","package.","page.","pain.","paint.","painting.","pair.","panic.","paper.","parent.","park.","parking.","partner.","party.","passage.","passenger.","passion.","past.","path.","patience.","patient.","pattern.","pause.","payment.","peace.","peak.","penalty.","pension.","people.","percentage.","perception.","performance.","period.","permission.","permit.","person.","personal.","personality.","perspective.","phase.","philosophy.","photo.","phrase.","physical.","physics.","piano.","pick.","picture.","piece.","pipe.","pitch.","pizza.","place.","plane.","plant.","plastic.","plate.","platform.","play.","player.","pleasure.","poem.","poet.","poetry.","point.","police.","policy.","politics.","pollution.","pool.","population.","position.","positive.","possession.","possibility.","possible.","post.","potato.","potential.","pound.","power.","practice.","preference.","preparation.","presence.","president.","press.","pressure.","price.","pride.","priest.","principle.","print.","prior.","priority.","private.","prize.","procedure.","process.","produce.","product.","profession.","professional.","professor.","profile.","profit.","program.","progress.","project.","promise.","promotion.","prompt.","proof.","property.","proposal.","protection.","psychology.","public.","pull.","punch.","purchase.","purple.","purpose.","push.","quality.","quantity.","quarter.","queen.","quiet.","quit.","quote.","race.","radio.","rain.","raise.","range.","rate.","ratio.","reach.","reaction.","reading.","reality.","reason.","reception.","recipe.","recognition.","recording.","recover.","reference.","reflection.","refrigerator.","refuse.","region.","register.","regret.","regular.","relation.","relationship.","relative.","relief.","remote.","remove.","rent.","repair.","repeat.","replacement.","republic.","reputation.","requirement.","research.","reserve.","resident.","resist.","resolution.","resolve.","resort.","resource.","respect.","respond.","rest.","restaurant.","result.","return.","reveal.","revenue.","review.","revolution.","reward.","rice.","rich.","ride.","ring.","rise.","risk.","river.","road.","rock.","role.","roll.","roof.","rope.","rough.","round.","routine.","royal.","ruin.","rule.","rush.","safe.","safety.","sail.","salad.","salary.","sale.","salt.","sample.","sand.","sandwich.","satisfaction.","save.","savings.","scale.","scene.","schedule.","scheme.","school.","science.","score.","scratch.","screen.","screw.","script.","search.","season.","seat.","second.","secret.","secretary.","section.","sector.","security.","selection.","self.","sell.","senior.","sense.","sensitive.","sentence.","series.","serve.","service.","session.","setting.","shake.","shame.","shape.","share.","shelter.","shift.","shine.","ship.","shirt.","shock.","shoe.","shoot.","shop.","shopping.","shot.","shoulder.","shower.","sick.","side.","sign.","signal.","signature.","significance.","silly.","silver.","simple.","sing.","singer.","single.","sink.","sister.","site.","situation.","size.","skill.","skin.","skirt.","sleep.","slice.","slide.","slip.","smell.","smile.","smoke.","snow.","society.","sock.","soft.","software.","soil.","solid.","solution.","somewhere.","song.","sort.","sound.","soup.","source.","south.","space.","spare.","speaker.","special.","specialist.","specific.","speech.","speed.","spell.","spend.","spirit.","spiritual.","spite.","split.","sport.","spot.","spray.","spread.","spring.","square.","stable.","stage.","stand.","standard.","star.","start.","state.","statement.","station.","status.","stay.","steak.","steal.","step.","stick.","still.","stock.","stomach.","stop.","storage.","store.","storm.","story.","strain.","stranger.","strategy.","street.","strength.","stress.","stretch.","strike.","string.","strip.","stroke.","structure.","struggle.","student.","studio.","study.","stuff.","stupid.","style.","substance.","success.","suck.","sugar.","suggestion.","suit.","summer.","supermarket.","support.","surgery.","surprise.","surround.","survey.","suspect.","sweet.","swim.","swimming.","swing.","switch.","sympathy.","system.","table.","tackle.","tale.","talk.","tank.","target.","task.","taste.","teach.","teacher.","teaching.","tear.","technology.","telephone.","television.","tell.","temperature.","temporary.","tennis.","tension.","term.","test.","text.","theory.","thing.","throat.","ticket.","till.","title.","tomorrow.","tone.","tongue.","tonight.","tool.","tooth.","total.","tough.","tourist.","towel.","tower.","track.","trade.","tradition.","traffic.","train.","trainer.","training.","transition.","trash.","travel.","treat.","tree.","trick.","trip.","trouble.","truck.","trust.","truth.","tune.","turn.","twist.","type.","uncle.","union.","unique.","university.","upper.","upstairs.","user.","usual.","vacation.","valuable.","value.","variation.","variety.","vast.","vegetable.","vehicle.","version.","video.","village.","virus.","visit.","visual.","voice.","volume.","wait.","wake.","walk.","wall.","warning.","wash.","watch.","water.","wave.","weakness.","wealth.","wear.","weather.","wedding.","weight.","weird.","west.","western.","wheel.","white.","whole.","wife.","wind.","window.","wing.","winner.","winter.","witness.","woman.","wonder.","wood.","work.","working.","world.","worry.","worth.","wrap.","writer.","yard.","year.","yellow.","young.","youth.","zone."],
                "I11": ["Please communicate","Please distribute","Please forward","Please give out","Please hand out","Please pass out","Please put out"],
                "I12": ["this advice","this message","this note","this remark","this request"],
                "I13": ["to your","to our","to his","to her","to their","to its"],
                "I14": ["department.","division.","group.","office.","team.","unit."],
                "I15": ["Ask for better ideas from","Avoid bad advice from","Become friendly with","Begin watching","Bring bad ideas to","Come forward to meet","Feel better by speaking to","Find a place to speak to","Get good ideas from","Give your resume to","Go to interview with","Hear more about this from","Hold your files with","Keep an eye out from","Know what to say to","Leave a note with","Let the advice come from","Make an appointment with","Move on to find more from","Put a request in to","Run away from","Say something to","See a visit from","Seek out a new idea from","Show this request to","Stand close to","Take an invitation from","Tell good things to","Think about greeting","Use some data from","Work closely with","Write a report to"],
                "I16": ["your","the"],
                "I17": ["RAND_JOB"],
                "I18": ["Because a person could need","Because anybody could look for","Because anyone might be needing","Because it is a little likely you want","Because it is a real possibility you need","Because it is likely you might want","Because it is possible you need","Because one might require","Because somebody might require","Because someone could need","Because you may need","Because you may want","Because you might need","Because you might require","Given the case a person wants","Given the case somebody requires","Given the scenario anyone needs","If a colleague is needing","If a consultant needs","If and only if a person needs","If and only if anybody wants","If and only if somebody requires","If concerned and need","If someone is wanting","If you happen to require","If you have to need","If you really need","If you still require","In case a consultant needs","In case anybody requires","In case someone wants","In the event a person needs","In the event anybody requires","In the event someone wants","On the assumption a person needs","On the assumption anyone requires","On the assumption somebody wants","Should others be looking for","Should others be requiring","Should you need","Should you require","So should you need","So should you require","So should you want"],
                "I19": ["a bit more","a lot more","added","additional","any further","extra","further","increased","more","new","other","some","some further","some more","supplementary"],
                "I20": ["advice,","assistance,","coaching,","concepts,","directions,","documents,","game plans,","grounding,","guidance,","ideas,","information,","input,","instruction,","opinions,","outlines,","practice,","preparation,","proposals,","reminders,","schemes,","solutions,","suggestions,","support,","theories,","tips,","training,","understanding,","warnings,"],
                "I21": ["do not forget to contact","do not forget to get in touch with","do not forget to reach out to","do not worry about asking","do not worry about contacting","do not worry about reaching out to","feel free to connect with","feel free to interact with","please do not forget to contact","please do not hesitate to contact","please ensure you contact","please get in touch with","please make sure to contact","please remember to contact","take the chance to reach out to","then attempt to contact","then drop a line to","then feel free to connect with","then feel free to reach out to","then get in touch with","then give a call to","then make a call to","then pick up the phone to","then reach out to"],
                "I22": ["our","the"],
                "I23": ["desk","group","helpdesk","helpline","office","personnel","staff","team","workers"],
                "I24": ["and","or","but"],
                "I25": ["additionally","also my","also our","also team","also the","else our","furthermore","instead","moreover","not only","one of our","otherwise","our business"],
                "I26": ["administrative assistants.","administrative managers.","administrative officers.","administrative technicians.","call center clerks.","call center staff.","director generals.","director specialists.","executive directors.","executive managers.","general directors.","general leaders.","general managers.","general secretaries.","information agents.","managerial aides.","office consultants.","office managers.","office secretaries.","office technicians.","office workers.","operational aides.","operational assistants.","personnel consultants.","personnel officers.","secretarial assistants.","secretarial consultants.","team leaders.","team officers.","work consultants."] 
              },
              "StrP3":
              {
                  "I1": ["I am emailing this to","I am writing this to","I am writing to","I await to","I desire to","I expect to","I hope to","I intend to","I thought to","I want to","I wish to","I would be happy to","I would like to","I would love to"],
                  "I2": ["appeal","ask","ask for","beg","call","encourage","invite","offer","persuade","put to","request","urge"],
                  "I3": ["you and your associates","you and your colleagues","you and your companions","you and your contractors","you and your coworkers","you and your employees","you and your fellow workers","you and your hires","you and your members of staff","you and your partners","you and your personnel","you and your staff","you and your team","you and your teammates","you and your workers","you and your workforce","you and your workmates","your associates and you","your colleagues and you","your companions and you","your contractors and you","your coworkers and you","your employees and you","your fellow workers and you","your hires and you","your members of staff and you","your partners and you","your personnel and you","your staff and you","your team and you","your teammates and you","your workers and you","your workforce and you","your workmates and you"],
                  "I4": ["to attend","to be at","to be present at","to come to","to go to","to join us at","to participate in","to take part in"],
                  "I5": ["my","our","the"],
                  "I6": ["appointment","assembly","association","briefing","collection","competition","conference","congregation","congress","contest","convention","council","debate","discussion","event","experience","forum","game","gathering","get together","government","hearing","inquiry","interview","investigation","junction","mass","match","meeting","meetings","merger","party","presentation","rally","rendezvous","reunion","seminar","session","show","summit","symposium","talk","tournament","townhall","trial","union","workshop"],
                  "I7": ["which","that"],
                  "I8": ["is to be held","is to be","is located","is being held"],
                  "I9": ["RAND_NAME"],
                  "I10": ["central","general","leading","main","primary","principal","secondary"],
                  "I11": ["auditorium","briefing","conference","congress","convention","exhibit","exhibition","exposition","huddle","meeting","town","trade"],
                  "I12": ["area.","center.","gallery.","hall.","hotel.","house.","lobby.","lodge.","motel.","office.","place.","quarters.","resort.","room.","space.","venue."],
                  "I13": ["This is anticipated","This is assumed","This is believed","This is considered","This is due","This is envisaged","This is expected","This is forecast","This is predicted","This is required","This is supposed","This is thought"],
                  "I14": ["to appear","to arise","to arrive","to be","to become","to come","to come about","to happen","to occur","to show up","to take place","to turn out"],
                  "I15": ["this","next","on"],
                  "I16": ["RAND_WEEKDAY"],
                  "I17": ["after breakfast","after lunch","after work","before breakfast","before lunch","before noon","before work","early afternoon","early evening","early morning","early on","late afternoon","late evening"],
                  "I18": ["this month.","next month.","this year.","next year.","this week.","next week."],
                  "I19": ["Please consult the attached","Please open the attached","Please read the attached","Please refer to the attached","Please see the attached","Please view the attached"],
                  "I20": ["database","image","presentation","presentation","spreadsheet","word document"],
                  "I21": ["file","form","record","release","report","summary"],
                  "I22": ["for further details","for further information","for more details","for more information"],
                  "I23": ["about our","concerning our","regarding our"],
                  "I24": ["drives.","efforts.","goals.","initiatives.","programs.","projects."],
                  "I25": ["A big appreciation to you","A big thank you","A great big thank you and welcome","A great many appreciations","A great many thanks","A huge appreciation","A huge thank you","A huge welcome","A huge welcoming appreciation","A hundred appreciations","A hundred hugs","A hundred thanks","A large appreciation","A large thank you","A large welcome","A million appreciations","A million hugs","A million thanks","A super big thank you","A super thanks and welcome","A thousand appreciations","A thousand hugs","A thousand thanks","A very big thank you","A very big welcome","A very large welcome","After all many ideas","After all my ideas","After all these ideas","After all those ideas","After all your ideas","As a concession","As a confirmation","As a courtesy","As a ratification","As a recognition","As an acceptance","As an acknowledgment","As an admission","As an affirmation","By blessing this communication is","By blessing this letter is","By her blessing this email is","By his blessing this card is","By mutual blessing this dispatch is","By my blessing this memo is","By our blessing this note is","By team blessing this mail is","By your blessing this report is","Communicating our acceptance","Communicating our acknowledgment","Communicating our admission","Communicating our affirmation","Communicating our concession","Communicating our confirmation","Communicating our courtesy","Communicating our praise","Communicating our ratification","Communicating our recognition","Disclosing our acceptance","Disclosing our acknowledgment","Disclosing our admission","Disclosing our affirmation","Disclosing our concession","Disclosing our confirmation","Disclosing our courtesy","Disclosing our praise","Disclosing our ratification","Disclosing our recognition","Expressing a concession","Expressing a confirmation","Expressing a courtesy","Expressing a praise","Expressing a ratification","Expressing a recognition","Expressing an acceptance","Expressing an acknowledgment","Expressing an admission","Expressing an affirmation","Feeling always obliged this dispatch is","Feeling greatly obliged this memo is","Feeling highly obliged this card is","Feeling humbly obliged this letter is","Feeling obliged this communication is","Feeling so obliged this report is","Feeling super obliged this note is","Feeling too obliged this email is","Feeling top obliged this mail is","Giving a concession","Giving a confirmation","Giving a courtesy","Giving a praise","Giving a ratification","Giving a recognition","Giving an acceptance","Giving an acknowledgment","Giving an admission","Giving an affirmation","Granting awareness this communication is","Granting general awareness this dispatch is","Granting her awareness this report is","Granting his awareness this note is","Granting manager awareness this mail is","Granting my awareness this letter is","Granting team awareness this email is","Granting their awareness this card is","Granting your awareness this memo is","I am announcing thank you","I am coming out with thank you","I am conveying thank you","I am deeply indebted to you","I am delivering thank you","I am enormously indebted to you","I am extensively indebted to you","I am extremely indebted to you","I am greatly indebted to you","I am grossly indebted to you","I am hugely indebted to you","I am incredibly indebted to you","I am indebted to you","I am indebted to you a colossal amount","I am indebted to you a dizzying amount","I am indebted to you a giant deal","I am indebted to you a great amount","I am indebted to you a great deal","I am indebted to you a huge amount","I am indebted to you a jumbo amount","I am indebted to you a lot","I am indebted to you a vast amount","I am indebted to you a whopping amount","I am indebted to you an awful amount","I am indebted to you an awful lot","I am indebted to you an oversized deal","I am indebted to you beyond words","I am indebted to you boundlessly","I am indebted to you extensively","I am indebted to you greatly","I am indebted to you immensely","I am indebted to you in excess","I am indebted to you inordinately","I am indebted to you limitlessly","I am indebted to you massively","I am indebted to you needlessly","I am indebted to you neverendingly","I am indebted to you over and above","I am indebted to you unmeasurably","I am making known thank you","I am massively indebted to you","I am monstrously indebted to you","I am putting into words thank you","I am reporting thank you","I am responding thank you","I am saying thank you","I am shouting out thank you","I am sincerely indebted to you","I am so indebted to you","I am stupendously indebted to you","I am super indebted to you","I am tremendously indebted to you","I am very indebted to you","I begin this call by thanking you","I begin this card thanking you","I begin this communication thanking you","I begin this dispatch thanking you","I begin this email thanking you","I begin this letter thanking you","I begin this mail thanking you","I begin this memo thanking you","I begin this note thanking you","I begin this report thanking you","I desire to inform you of my appreciation","I desire to let me extend my gratitude","I desire to say good job","I desire to say thanks","I desire to say well done","I desire to speak and say great job","I desire to tell you good job","I desire to tell you thanks","I desire to tell you well done","I expect to inform you of my appreciation","I expect to let me extend my gratitude","I expect to say good job","I expect to say thanks","I expect to say well done","I expect to speak and say great job","I expect to tell you good job","I expect to tell you thanks","I expect to tell you well done","I first lead this call by thanking you","I first lead this card thanking you","I first lead this communication thanking you","I first lead this dispatch thanking you","I first lead this email thanking you","I first lead this letter thanking you","I first lead this mail thanking you","I first lead this memo thanking you","I first lead this note thanking you","I first lead this report thanking you","I hope to inform you of my thanks","I hope to let me extend my gratitude","I hope to say good job","I hope to say thanks","I hope to say well done","I hope to speak and say great job","I hope to tell you good job","I hope to tell you thanks","I hope to tell you well done","I long to express appreciation","I long to inform you of my appreciation","I long to let me extend my gratitude","I long to say good job","I long to say thanks","I long to say well done","I long to speak and say great job","I long to tell you good job","I long to tell you thanks","I long to tell you well done","I need to inform you of my thanks","I need to let me extend my gratitude","I need to say good job","I need to say thanks","I need to say well done","I need to speak and say great job","I need to tell you good job","I need to tell you thanks","I need to tell you well done","I start this call by thanking you","I start this card thanking you","I start this communication thanking you","I start this dispatch thanking you","I start this email thanking you","I start this letter thanking you","I start this mail thanking you","I start this memo thanking you","I start this note thanking you","I start this report thanking you","I want to express appreciation","I want to express thanks","I want to inform you of my thanks","I want to let me extend my gratitude","I want to say good job","I want to say thanks","I want to say thanks to you","I want to say well done","I want to speak and say great job","I want to tell you good job","I want to tell you thanks","I want to tell you well done","I want to thank you","I will begin by expressing thanks","I will explain to you my gratefulness","I will let you read my gratefulness","I will start by saying thanks","I will tell you my gratitude","I wish to express appreciation","I wish to inform you of my thanks","I wish to let me extend my gratitude","I wish to say good job","I wish to say thanks","I wish to say thanks to you","I wish to say well done","I wish to speak and say great job","I wish to tell you good job","I wish to tell you thanks","I wish to tell you well done","I wish to thank you","I would like to express appreciation","I would like to inform you of my appreciation","I would like to let me extend my gratitude","I would like to say good job","I would like to say thanks","I would like to say well done","I would like to speak and say great job","I would like to tell you good job","I would like to tell you thanks","I would like to tell you well done","In any event of many thoughts","In any event of my thoughts","In any event of these thoughts","In any event of those thoughts","In any event of your thoughts","It is a breathtaking experience","It is a glories experience","It is a good joy","It is a gorgeous joy","It is a grand wonder","It is a great wonder","It is a magnificent joy","It is a marvelous experience","It is a splendid experience","It is a stunning wonder","It is a superb joy","It is a superior joy","It is an excellent experience","It is an impressing wonder","It is an outstanding wonder","It is the best thing","It is the biggest experience","It is the funniest experience","It is the grandest wonder","It is the greatest experience","It is the happiest thing","It is the highest experience","It is the loveliest wonder","It is the most considerable wonder","It is the most enormous joy","It is the most extravagant experience","It is the most extreme thing","It is the most immense joy","It is the most important experience","It is the most incredible experience","It is the most joyous experience","It is the most splendid thing","It is the most superb thing","It is the most towering wonder","It is the most wonderful thing","It is the nicest joy","It is the strongest thing","It is the very best thing",
                  "It was a beautiful alert of you","It was a beautiful idea of you","It was a beautiful pleasure of you","It was a beautiful proposal of you","It was a beautiful proposition of you","It was a beautiful recommendation of you","It was a beautiful suggestion of you","It was a beautiful thing of you","It was a beautiful thought of you","It was a beautiful warning of you","It was a great alert of you","It was a great idea of you","It was a great pleasure of you","It was a great proposal of you","It was a great proposition of you","It was a great recommendation of you","It was a great suggestion of you","It was a great thing of you","It was a great thought of you","It was a great warning of you","It was a lovely alert of you","It was a lovely idea of you","It was a lovely pleasure of you","It was a lovely proposal of you","It was a lovely proposition of you","It was a lovely recommendation of you","It was a lovely suggestion of you","It was a lovely thing of you","It was a lovely thought of you","It was a lovely warning of you","It was a nice alert of you","It was a nice idea of you","It was a nice pleasure of you","It was a nice proposal of you","It was a nice proposition of you","It was a nice recommendation of you","It was a nice suggestion of you","It was a nice thing of you","It was a nice thought of you","It was a nice warning of you","It was a super alert of you","It was a super idea of you","It was a super pleasure of you","It was a super proposal of you","It was a super proposition of you","It was a super recommendation of you","It was a super suggestion of you","It was a super thing of you","It was a super thought of you","It was a super warning of you","It was agreeable of you","It was amazing of you","It was amiable of you","It was appropriate of you","It was awesome of you","It was beautiful of you","It was better of you","It was charming of you","It was delightful of you","It was fantastic of you","It was fine of you","It was friendly of you","It was good of you","It was great of you","It was kind of you","It was lovely of you","It was marvelous of you","It was okay of you","It was pleasant of you","It was polite of you","It was proper of you","It was really awesome of you","It was really beautiful of you","It was really good of you","It was really lovely of you","It was really okay of you","It was really pleasant of you","It was really proper of you","It was really sweet of you","It was really terrific of you","It was really very good of you","It was so agreeable of you","It was so amiable of you","It was so appropriate of you","It was so friendly of you","It was so good of you","It was so great of you","It was so marvelous of you","It was so polite of you","It was so sympathetic of you","It was sweet of you","It was sympathetic of you","It was terrific of you","It was very amazing of you","It was very better of you","It was very charming of you","It was very delightful of you","It was very fantastic of you","It was very fine of you","It was very good of you","It was very kind of you","It was very really good of you","It was very wonderful of you","It was wonderful of you","Management desire to express appreciation","Management long to express appreciation","Management want to express appreciation","Management wish to express appreciation","Management would like to express appreciation","Management yearn to express appreciation","Many kind thanks","My colleague thanks you","My colleagues crave to express appreciation","My colleagues desire to express appreciation","My colleagues long to express appreciation","My colleagues want to express appreciation","My colleagues wish to express appreciation","My colleagues would like to express appreciation","My colleagues yearn to express appreciation","My coworker is grateful","My deputy is grateful","My deputy thanks you","My manager conveys thanks","My manager is grateful","My manager is shouting out thanks","My manager says it is charming of you","My manager says it was charming of you","My manager says it was good of you","My manager says it was kind of you","My manager says it was sweet of you","My manager thanks you","My supervisor is announcing thank you","My supervisor is coming out with thank you","My supervisor is conveying thank you","My supervisor is delivering thank you","My supervisor is grateful","My supervisor is making known thank you","My supervisor is putting into words thank you","My supervisor is reporting thank you","My supervisor is responding thank you","My supervisor is saying thank you","My supervisor is shouting out thank you","My supervisor thanks you","My team greatly appreciates","My team is grateful","My team is grateful to you","My team leader thanks you","My team thanks you","My very many thanks","No end of thanks","Notwithstanding many hopes","Notwithstanding my hopes","Notwithstanding these hopes","Notwithstanding those hopes","Notwithstanding your hopes","Numerous thanks","On account of many hopes","On account of many ideas","On account of many thoughts","On account of much understanding","On account of my hopes","On account of my ideas","On account of my thoughts","On account of my understanding","On account of that understanding","On account of these hopes","On account of these ideas","On account of these thoughts","On account of this understanding","On account of those hopes","On account of those ideas","On account of those thoughts","On account of your hopes","On account of your ideas","On account of your thoughts","On account of your understanding","Our advisor came in","Our advisor has arrived","Our agent arrived here","Our agent has appeared","Our analyst came in","Our analyst has arrived","Our architect arrived here","Our architect has appeared","Our assistant came in","Our assistant has arrived","Our auditor arrived here","Our auditor has appeared","Our chief operator arrived here","Our chief operator has appeared","Our clerk came in","Our clerk has arrived","Our comptroller arrived here","Our comptroller has appeared","Our coordinator came in","Our coordinator has arrived","Our designer arrived here","Our designer has appeared","Our director came in","Our director has arrived","Our dispatcher arrived here","Our dispatcher has appeared","Our engineer came in","Our engineer has arrived","Our examiner arrived here","Our examiner has appeared","Our expressed thanks","Our inspector came in","Our inspector has arrived","Our investigator arrived here","Our investigator has appeared","Our leader came in","Our leader has arrived","Our manager arrived here","Our manager has appeared","Our many thanks","Our many wishes of thanks","Our office manager arrived here","Our office manager has appeared","Our officer came in","Our officer has arrived","Our operator arrived here","Our operator has appeared","Our personnel officer came in","Our personnel officer has arrived","Our representative came in","Our representative has arrived","Our senior editor came in","Our senior editor has arrived","Our so many thanks","Our specialist arrived here","Our specialist has appeared","Our superintendent came in","Our superintendent has arrived","Our supervisor came in","Our supervisor has arrived","Our team craves to express appreciation","Our team desires to express appreciation","Our team longs to express appreciation","Our team wants to express appreciation","Our team wishes to express appreciation","Our team would like to express appreciation","Our team yearns to express appreciation","Our technician arrived here","Our technician has appeared","Our trainee came in","Our trainee has arrived","Our very many thanks","Our worker arrived here","Our worker has appeared","Putting out the acceptance","Putting out the acknowledgment","Putting out the admission","Putting out the affirmation","Putting out the concession","Putting out the confirmation","Putting out the courtesy","Putting out the praise","Putting out the ratification","Putting out the recognition","Showing a big greeting this memo is","Showing a grand greeting this card is","Showing a great greeting this report is","Showing a greeting this communication is","Showing a healthy greeting this dispatch is","Showing a large greeting this note is","Showing a long greeting this mail is","Showing a token greeting this email is","Showing a wide greeting this letter is","So a great many thanks","Taking on a big greeting this memo is","Taking on a grand greeting this card is","Taking on a great greeting this report is","Taking on a greeting this communication is","Taking on a hearty greeting this dispatch is","Taking on a large greeting this note is","Taking on a long greeting this mail is","Taking on a token greeting this email is","Taking on a wide greeting this letter is","Thank you very much","Thanks so much","Thanks very much","That is really awesome of you","That is really beautiful of you","That is really lovely of you","That is really okay of you","That is really pleasant of you","That is really proper of you","That is really sweet of you","That is really terrific of you","That is really very good of you","That is so agreeable of you","That is so amiable of you","That is so appropriate of you","That is so friendly of you","That is so good of you","That is so great of you","That is so marvelous of you","That is so polite of you","That is so sympathetic of you","That is very amazing of you","That is very better of you","That is very charming of you","That is very delightful of you","That is very fantastic of you","That is very fine of you","That is very kind of you","That is very really good of you","That is very wonderful of you","That was absolutely amiable of you","That was absolutely awesome of you","That was absolutely beautiful of you","That was absolutely better of you","That was absolutely fantastic of you","That was absolutely fine of you","That was absolutely good of you","That was absolutely kind of you","That was absolutely marvelous of you",
                  "That was absolutely okay of you","That was absolutely polite of you","That was absolutely really good of you","That was absolutely sympathetic of you","That was absolutely very good of you","That was extremely amiable of you","That was extremely awesome of you","That was extremely beautiful of you","That was extremely better of you","That was extremely fantastic of you","That was extremely fine of you","That was extremely good of you","That was extremely kind of you","That was extremely marvelous of you","That was extremely okay of you","That was extremely polite of you","That was extremely sympathetic of you","That was extremely very good of you","That was incredibly agreeable of you","That was incredibly amazing of you","That was incredibly appropriate of you","That was incredibly charming of you","That was incredibly delightful of you","That was incredibly friendly of you","That was incredibly great of you","That was incredibly lovely of you","That was incredibly marvelous of you","That was incredibly pleasant of you","That was incredibly proper of you","That was incredibly sweet of you","That was incredibly terrific of you","That was incredibly wonderful of you","That was really amiable of you","That was really awesome of you","That was really beautiful of you","That was really better of you","That was really fantastic of you","That was really fine of you","That was really good of you","That was really kind of you","That was really marvelous of you","That was really nice good of you","That was really okay of you","That was really polite of you","That was really sympathetic of you","That was really very good of you","That was so extremely good of you","The advisor came here","The advisor is here","The agent was there","The agent went there","The analyst came here","The analyst is here","The architect was there","The architect went there","The assistant came here","The assistant is here","The auditor was there","The auditor went there","The chief operator was there","The chief operator went there","The clerk came here","The clerk is here","The company advisor is at the door","The company agent is in the hall","The company analyst is at the door","The company architect is in the hall","The company assistant is at the door","The company auditor is in the hall","The company chief operator is in the hall","The company clerk is at the door","The company comptroller is in the hall","The company coordinator is at the door","The company designer is in the hall","The company director is at the door","The company dispatcher is in the hall","The company engineer is at the door","The company examiner is in the hall","The company inspector is at the door","The company investigator is in the hall","The company is coming out with thank you","The company is making known thank you","The company is putting into words thank you","The company is responding thank you","The company is shouting out thank you","The company leader is at the door","The company manager is in the hall","The company office manager is in the hall","The company officer is at the door","The company operator is in the hall","The company personnel officer is at the door","The company representative is at the door","The company senior editor is at the door","The company specialist is in the hall","The company superintendent is at the door","The company supervisor is at the door","The company technician is in the hall","The company trainee is at the door","The company worker is in the hall","The comptroller was there","The comptroller went there","The coordinator came here","The coordinator is here","The designer was there","The designer went there","The director came here","The director craves to express appreciation","The director desires to express appreciation","The director is here","The director longs to express appreciation","The director wants to express appreciation","The director wishes to express appreciation","The director would like to express appreciation","The director yearns to express appreciation","The dispatcher was there","The dispatcher went there","The engineer came here","The engineer is here","The examiner was there","The examiner went there","The group is announcing thank you","The group is coming out with thank you","The group is conveying thank you","The group is delivering thank you","The group is making known thank you","The group is putting into words thank you","The group is reporting thank you","The group is responding thank you","The group is saying thank you","The group is shouting out thank you","The inspector came here","The inspector is here","The investigator was there","The investigator went there","The leader came here","The leader is here","The manager was there","The manager went there","The office craves to express appreciation","The office desires to express appreciation","The office longs to express appreciation","The office manager was there","The office manager went there","The office wants to express appreciation","The office wishes to express appreciation","The office would like to express appreciation","The office yearns to express appreciation","The officer came here","The officer is here","The operator was there","The operator went there","The personnel officer came here","The personnel officer is here","The representative came here","The representative is here","The senior advisor is not too far away","The senior agent is in reception","The senior analyst is not too far away","The senior architect is in reception","The senior assistant is not too far away","The senior auditor is in reception","The senior chief operator is in reception","The senior clerk is not too far away","The senior comptroller is in reception","The senior coordinator is not too far away","The senior designer is in reception","The senior director is not too far away","The senior dispatcher is in reception","The senior editor came here","The senior editor is here","The senior editor is not too far away","The senior engineer is not too far away","The senior examiner is in reception","The senior inspector is not too far away","The senior investigator is in reception","The senior leader is not too far away","The senior manager is in reception","The senior office manager is in reception","The senior officer is not too far away","The senior operator is in reception","The senior personnel officer is not too far away","The senior representative is not too far away","The senior specialist is in reception","The senior superintendent is not too far away","The senior supervisor is not too far away","The senior technician is in reception","The senior trainee is not too far away","The senior worker is in reception","The specialist was there","The specialist went there","The superintendent came here","The superintendent is here","The supervisor came here","The supervisor is here","The technician was there","The technician went there","The trainee came here","The trainee is here","The worker was there","The worker went there","There are so many acceptances","There are so many admittances","There are so many allowances","There are so many appreciations","There are so many concessions","There are so many confessions","There are so many courtesies","There are so many grants","There are so many ideas","There are so many realizations","There are so many thoughts","There is so much acceptance","There is so much confirmation","There is so much praise","There is so much recognition","There is so much to ask","There is so much to avail","There is so much to convey","There is so much to declare","There is so much to examine","There is so much to glimpse","There is so much to look over","There is so much to ogle","There is so much to pronounce","There is so much to prospect","There is so much to regard","There is so much to remark","There is so much to say","There is so much to see","There is so much to speak","There is so much to tell","There is so much to voice","There is to be a chat","There is to be a consideration","There is to be a consultation","There is to be a conversation","There is to be a debate","There is to be a dialogue","There is to be a discourse","There is to be a dispute","There is to be a review","There is to be a scrutiny","There is to be a seminar","There is to be a study","There is to be a talk","There is to be a treatment","There is to be an analysis","There is to be an argument","There is to be an examination","There is to be an exchange of views","There is to be an exploration","There was a big hand","There was a lot of stamping","There was a lot of standing","There was a lot to check out","There was a lot to consider","There was a lot to evaluate","There was a lot to eyeball","There was a lot to have a gander at","There was a lot to inspect","There was a lot to observe","There was a lot to regard","There was a lot to review","There was a lot to scan","There was a lot to scrutinize","There was a lot to size up","There was a lot to survey","There was a lot to thank","There was much to assess","There was much to chew over","There was much to compare","There was much to evaluate","There was much to examine","There was much to judge","There was much to ponder","There was much to reflect on","There was much to review","There was much to study","There was much to think about","There was much to turnover","There was so much cheering","There was so much clapping","There was so much whistling","There were many analyses","There were many articles","There were many cheers","There were many commentaries","There were many criticisms","There were many evaluations","There were many investigations","There were many judgements","There were many pieces","There were many probes","There were many ratings","There were many write-ups","There were so many acclamations","There were so many accolades","There were so many cheers","There were so many hurrahs","There were so many praises","There were so many whistles",
                  "This is to thank you","To begin a big greeting this memo is","To begin a grand greeting this card is","To begin a great greeting this report is","To begin a greeting this communication is","To begin a hearty greeting this dispatch is","To begin a large greeting this note is","To begin a long greeting this mail is","To begin a token greeting this email is","To begin a wide greeting this letter is","Toward a concession","Toward a confirmation","Toward a courtesy","Toward a praise","Toward a ratification","Toward a recognition","Toward an acceptance","Toward an acknowledgment","Toward an admission","Toward an affirmation","Under a concession","Under a confirmation","Under a courtesy","Under a praise","Under a ratification","Under a recognition","Under an acceptance","Under an acknowledgment","Under an admission","Under an affirmation","Very many thanks","Voicing our acceptance","Voicing our acknowledgment","Voicing our admission","Voicing our affirmation","Voicing our concession","Voicing our confirmation","Voicing our courtesy","Voicing our praise","Voicing our ratification","Voicing our recognition","We appreciate you","We are coming out with thank you","We are deeply indebted to you","We are enormously indebted to you","We are extensively indebted to you","We are extremely indebted to you","We are greatly indebted to you","We are grossly indebted to you","We are hugely indebted to you","We are incredibly indebted to you","We are indebted to you","We are indebted to you a colossal amount","We are indebted to you a dizzying amount","We are indebted to you a giant deal","We are indebted to you a great amount","We are indebted to you a great deal","We are indebted to you a huge amount","We are indebted to you a jumbo amount","We are indebted to you a lot","We are indebted to you a vast amount","We are indebted to you a whopping amount","We are indebted to you an awful amount","We are indebted to you an awful lot","We are indebted to you an oversized deal","We are indebted to you beyond words","We are indebted to you boundlessly","We are indebted to you extensively","We are indebted to you greatly","We are indebted to you immensely","We are indebted to you in excess","We are indebted to you inordinately","We are indebted to you limitlessly","We are indebted to you massively","We are indebted to you needlessly","We are indebted to you neverendingly","We are indebted to you over and above","We are indebted to you unmeasurably","We are making known thank you","We are massively indebted to you","We are monstrously indebted to you","We are putting into words thank you","We are responding thank you","We are shouting out thank you","We are sincerely indebted to you","We are so indebted to you","We are stupendously indebted to you","We are super indebted to you","We are tremendously indebted to you","We are very indebted to you","We crave to express appreciation","We desire to express appreciation","We gratefully appreciate","We greatly appreciate","We long to express appreciation","We open this call by thanking you","We open this card thanking you","We open this communication thanking you","We open this dispatch thanking you","We open this email thanking you","We open this letter thanking you","We open this mail thanking you","We open this memo thanking you","We open this note thanking you","We open this report thanking you","We thank you a lot","We thank you so much","We thank you very much","We want to express appreciation","We wish to express appreciation","We would like to express appreciation","We yearn to express appreciation","With a big greeting this memo is","With a big smile this memo is","With a grand greeting this card is","With a grand smile this card is","With a great greeting this report is","With a great smile this report is","With a greeting this communication is","With a healthy greeting this dispatch is","With a hearty smile this dispatch is","With a large greeting this note is","With a large smile this note is","With a long greeting this mail is","With a long smile this mail is","With a smile this communication is","With a token greeting this email is","With a token smile this email is","With a wide greeting this letter is","With a wide smile this letter is","With acceptance this communication is","With acknowledgement this communication is","With her acceptance this card is","With her acknowledgement this card is","With his acceptance this report is","With his acknowledgement this report is","With manager acceptance this dispatch is","With manager acknowledgement this dispatch is","With my acceptance this letter is","With my acknowledgement this letter is","With our acceptance this memo is","With our acknowledgement this memo is","With team acceptance this mail is","With team acknowledgement this mail is","With their acceptance this email is","With their acknowledgement this email is","With your acceptance this note is","With your acknowledgement this note is","Yet against many dreams","Yet against my dreams","Yet against these dreams","Yet against those dreams","Yet against your dreams","Your advisor has shown up","Your advisor is inside","Your agent has walked in","Your agent is outside","Your analyst has shown up","Your analyst is inside","Your architect has walked in","Your architect is outside","Your assistant has shown up","Your assistant is inside","Your auditor has walked in","Your auditor is outside","Your chief operator has walked in","Your chief operator is outside","Your clerk has shown up","Your clerk is inside","Your coordinator has shown up","Your coordinator is inside","Your designer has walked in","Your designer is outside","Your director has shown up","Your director is inside","Your dispatcher has walked in","Your dispatcher is outside","Your engineer has shown up","Your engineer is inside","Your examiner has walked in","Your examiner is outside","Your inspector has shown up","Your inspector is inside","Your investigator has walked in","Your investigator is outside","Your leader has shown up","Your leader is inside","Your manager has walked in","Your manager is outside","Your office manager has walked in","Your office manager is outside","Your officer has shown up","Your officer is inside","Your operator has walked in","Your operator is outside","Your personnel officer has shown up","Your personnel officer is inside","Your representative has shown up","Your representative is inside","Your senior editor has shown up","Your senior editor is inside","Your specialist has walked in","Your specialist is outside","Your superintendent has shown up","Your superintendent is inside","Your supervisor has shown up","Your supervisor is inside","Your technician has walked in","Your technician is outside","Your trainee has shown up","Your trainee is inside","Your worker has walked in","Your worker is outside"],
                  "I26": ["for the"],
                  "I27": ["account","advertisement","advice","alert","almanac","announcement","archive","bill","binder","book","booklet","box","brief","broadcast","bulletin","calendar","case","catalog","certificate","chart","charter","chat","chronicle","circular","command","contract","courseware","data","declaration","deed","demand","description","detail","detailed outline","details","dictation","directions","directive","document","documentation","documents","electronic chat","email","envelope","evidence","exposition","facts","figures","file","flyer","folder","form","freeware","groupware","guidance","guide","handbook","handout","image","info","instance","instructions","inventory","leaflet","letter","list","log","mail","mandate","manual","materials","memo","message","news","note","notice","notification","online message","order","pamphlet","paper","paperwork","particulars","portfolio","posting","price list","proceedings","program","prospectus","publication","record","register","report","review","ring binder","roll","roster","schedule","shareware","sheet","software","specification","spreadsheet","statement","statistics","stipulation","system","transcript","voice note","wallet","warning","word","yearbook"],
                  "I28": ["acquired","addressed","assigned","brought","channeled","conveyed","derived","directed","dispatched","emailed","encountered","faxed","forwarded","gotten","granted","handed in","handed over","mailed","moved","passed on","picked up","posted","presented","received","redirected","relinquished","relocated","remitted","sent","shifted","surrendered","taken on","transferred","transmitted","turned over","uploaded","wired"],
                  "I29": ["a little while ago.","a little while back.","a little while recently.","a short time ago.","a short time back.","earlier noon today.","earlier on today.","earlier this afternoon.","earlier this evening.","earlier this month.","earlier this morning.","earlier this week.","earlier this year.","early afternoon today.","early at midday.","early at noon.","early morning last.","in recent days.","in recent hours.","in recent months.","in recent times.","in recent weeks.","in recent years.","just a bit recently.","just earlier on.","just last afternoon.","just last evening.","just last morning.","just quite recently.","just this afternoon.","just this evening.","just this morning.","just very recently.","last early afternoon.","last early evening.","last early morning.","much earlier on.","much earlier yesterday.","not earlier on.","not so long ago.","not so recently.","not that long ago.","not that long back.","not that recently.","not too long ago.","so very recently.","some time ago.","some time back.","somewhat recently.","the day before last.","the day before.","this last month.","this last time.","this last week.","this very afternoon.","this very evening.","this very morning.","today at midday.","today at noon.","yesterday afternoon.","yesterday at midday.","yesterday at noon.","yesterday evening.","yesterday midday.","yesterday morning.","yesterday noon."],
                  "I30": ["Please communicate","Please distribute","Please forward","Please give out","Please hand out","Please pass out","Please put out"],
                  "I31": ["this advice","this message","this note","this remark","this request"],
                  "I32": ["to your","to our","to his","to her","to their","to its"],
                  "I33": ["department.","division.","group.","office.","team.","unit."],
                  "I34": ["Ask for better ideas from","Avoid bad advice from","Become friendly with","Begin watching","Bring bad ideas to","Come forward to meet","Feel better by speaking to","Find a place to speak to","Get good ideas from","Give your resume to","Go to interview with","Hear more about this from","Hold your files with","Keep an eye out from","Know what to say to","Leave a note with","Let the advice come from","Make an appointment with","Move on to find more from","Put a request in to","Run away from","Say something to","See a visit from","Seek out a new idea from","Show this request to","Stand close to","Take an invitation from","Tell good things to","Think about greeting","Use some data from","Work closely with","Write a report to"],
                  "I35": ["your","the"],
                  "I36": ["RAND_JOB"]
                  
               },
              "StatP2":
              {
                  "I1": ["There","It"],
                  "I": ["could be","could had been","could have been","could not be","could not had been","could not have been","had been","had not been","has been","has got to be","has not been","has not got to be","has not to be","has to be","must be","must had been","must have been","must not be","must not had been","must not have been","should be","should had been","should have been","should not be","should not had been","should not have been","were not to be","were to be","would be","would had been","would have been","would not be","would not had been","would not have been"],
                  "I3": ["areas","books","businesses","cases","companies","components","concepts","concerns","countries","courses","days","dents","details","entities","facts","governments","groups","homes","jobs","lives","materials","men","money","months","numbers","options","parts","people","places","points","problems","programs","questions","rights","sections","states","stories","studies","systems","things","ways","weeks","women","words","works","worlds","years"],
                  "I4": ["almost always","almost frequently","always","at intervals","at random","at times","consistently","constantly","every so often","frequently","from time to time","hardly","hardly ever","here and there","infrequently","intermittently","invariably","irregularly","nearly sometimes","normally","not regularly","now and again","now and then","occasionally","off and on","often","on occasion","once in a blue moon","once in a while","once or twice","periodically","perpetually","rarely","recurrently","routinely","scarcely","seldom","sometimes","sporadically","typically","unceasingly","uncommonly","unusually","usually"],
                  "I5": ["you do not have.","you do not need.","you have not need.","you have to do.","you have to have.","you have to need.","you need not do.","you need not have.","you need to do.","you need to have."],
                  "I6": ["Does it come how long?","Does it come how?","Does it come when?","Does it get how much?","Does it get what?","Does it go what?","Does it go when?","Does it go where?","Does it know how?","Does it know where?","Does it know who?","Does it make how long?","Does it make what?","Does it make who?","Does it say when?","Does it say where?","Does it say who?","Does it see how?","Does it see which?","Does it see why?","Does it take how much?","Does it take long?","Does it take what?","Does it think how long?","Does it think how?","Does it think which?","Does it want how much?","Does it want what?","Does it want which?","How does it know?","How does it look?","How does it make?","How does it take?","How does it want?","How long does it know?","How long does it take?","How long does it try?","How long does it want?","How long does it work?","How much does it feel?","How much does it know?","How much does it need?","How much does it want?","How much does it work?","What does it make?","What does it need?","What does it say?","What does it try?","What does it want?","When does it come?","When does it do?","When does it give?","When does it use?","When does it work?","Where does it become?","Where does it come from?","Where does it go?","Where does it know?","Where does it think?","Which does it become?","Which does it know?","Which does it like?","Which does it tell?","Which does it want?","Who does it call?","Who does it get?","Who does it know?","Who does it see?","Who does it take?","Why does it call?","Why does it come?","Why does it make?","Why does it say?","Why does it think?"],
                  "I7": ["Additionally,","Although,","As follows,","But also,","Despite,","Event though,","Firstly,","For consideration,","For example,","For instance,","Furthermore,","However,","In addition,","In spite of,","Moreover,","Mostly,","Nonetheless,","Notwithstanding,","Secondly,","Thirdly,","To begin with,","To list as follows,","To sum up,","Yet,"],
                  "I8": ["admit","answer","apply","argue","arrive","begin","check","clear","collect","complete","consist","contain","describe","destroy","disappear","discover","encourage","exist","expect","explain","express","find","finish","forget","forgive","imagine","influence","involve","join","leave","lend","limit","measure","mention","prepare","prevent","remember","repeat","suggest","suppose","think","throw","understand"],
                  "I9": ["advantages","authorizations","disadvantages","equipment","goals","income","invoices","offers","products","profits","purchases","refunds","reports","structure"],
                  "I10": ["as","because"],
                  "I11": ["budgets","calls","commissions","costs","customers","cuts","damage","debts","deficits","growths","interests","markets","orders","outputs","payments","profits","risks","salaries","shares","studies"],
                  "I12": ["have been","were","will be"],
                  "I13": ["carrying on","catching up","changing","continuing","dealing","decreasing","developing","driven up","falling","falling down","going down","going up","growing","improving","increasing","keeping up","performing","playing down","pointing up","pressing","producing","pushing up","reaching","reducing","rising","surviving"],
                  "I14": ["about","almost","approaching","approximately","around","by around","by exactly","by over","by roughly","by up to","close to","getting on for","in the area of","in the region of","in the vicinity of","just about","more or less","nearly","not far off","of the order of","pushing","roughly","round about","something like"],
                  "I15": ["RAND_PERCENT"],
                  "I16": ["(excluding","(as well as","(bar","(barring","(besides","(but","(counting","(except","(excepting","(exclusive of","(including","(leaving out","(not counting","(not including","(omitting","(other than","(plus","(together with"],
                  "I17": ["applications)","bonuses)","bookings)","brokerages)","calls)","carriages)","claims)","commissions)","complaints)","considerations)","conveyances)","deliveries)","demands)","dispatches)","distributions)","dividends)","employees)","employers)","experiences)","fees)","fines)","freightage)","gratuities)","guarantees)","haulages)","inventories)","orders)","payments)","penalties)","percentages)","petitions)","portages)","portions)","premiums)","protections)","purchase orders)","remittances)","removals)","requests)","requisitions)","reservations)","shares)","shipments)","supports)","tips)","transportations)","transporting)","transports)","travels)","visitors)"],
                  "I18": ["since","from","back","until"],
                  "I19": ["RAND_MONTH"],
                  "I20": ["last year.","this year."],
                  "I21": ["The industry's","The agency's","The business's","The company's","The corporation's","The department's","The division's","The firm's","The group's","The institution's","The operation's","The organization's"],
                  "I22": ["BEING","CALLING","COMING","DOING","FEELING","GETTING","GIVING","GOING","HAVE","KNOWING","LOOKING","MAKING","SEEING","TAKING","THINKING","TRYING","WANTING","WORKING"],
                  "I23": ["RAND_YEAR"],
                  "I24": ["advertisement","agenda","agreement","allowance","belief","brand","cause","choice","event","feedback","form","help","initiative","project","promotion","supply","venture"],
                  "I25": ["is on"], 
                  "I26": ["RAND_DATE"],
                  "I27": ["Eighty-","Fifty-","Forty-","Ninety-","Seventy-","Sixty-","Thirty-","Twenty-"],
                  "I28": ["one","two","three","four","five","six","seven","eight","nine"],
                  "I29": ["assistants","customers","employees","figures","individuals","members of staff","men and women","office workers","people","personnel","persons","staff","workers"],
                  "I30": ["from"],
                  "I31": ["\"Accounting & Finance","\"Buying & Selling","\"Corporate Law/Governance","\"Directorship/Management","\"Finance & Law","\"Finance/Accounting","\"Finance/PR/Accounts","\"Import & Exports","\"Inside/Outside Trading","\"Internal/External Auditing","\"Internal/External Operations","\"IT/Computer Security","\"New Business/Development","\"Personnel/Human Resources","\"Production & Assembly","\"Purchasing & Supplies","\"Quality/Monitoring","\"Research & Advisory","\"Research & Development","\"Sales & Marketing","\"Sales/Supply Planning","\"Secretarial/Office Administration","\"Strategy & Advisory","\"Strategy & Development","\"Tracking & Support","\"Trade/Operations","\"Training & Development","\"Transport & Logistics"],
                  "I32": ["Division\"","Group\"","Unit\"","Team\"","Department\"","Division\"","Organization\"","Entity\"","Section\"","Sector\""],
                  "I33": ["on"],
                  "I34": ["RAND_NUMBER10000"],
                  "I35": ["projects","dependencies","experiences","facilities","industries","matters","meetings","offers","places","products","relations","reports","results","training"],
                  "I36": ["could","may","might","must","need to"],
                  "I37": ["accept","achieve","afford","arrange","avoid","build","buy","contribute","control","create","deny","gain","hide","hold","lose","move","refund","release","return","save","send","set","stock","supply","win"],
                  "I38": ["RAND_DOLLAR"],
                  "I39": ["as a proceed;","as a reward;","as takings;","at an advantage;","billion;","in a percentage;","in an earning;","in income;","in receipt;","in return;","million;","of costs;","of dividend;","of gains;","of interest;","of profit;","of returns;","of surpluses;","of winnings;","of yield;","trillion;","worth;"],
                  "I40": ["become H&S partners.","check out B&T partners!","check out our Q&As.","check out the business T&Cs!","checkout our options in R&D.","contact AB&T for more info!","contact Bath & Jones for data.","data provided by Hound & Sons!","dial 1 and press # key.","figures courtesy of Gould & Swan!","follow #great for promotions.","follow #shall for promotions!","get in touch with Carter & Hall.","get in touch with DC&S!","hit 5 and press # key.","host a Q&A session!","learn how to get some R&R.","like us on #happy tag!","like us on #sweet tag.","look for the * key!","present a Q&A session.","press the * key to confirm!","press the * key to hang up.","press the # key to execute!","press the # key to resend.","refer to our latest T&Cs!","refer to P&G data.","refer to Y&W data!","remember to invest in R&D.","search using the * character!","search with the * character.","see our Q&A section!","specified from company #4239.","tag #hope for extra news!","tag #joy for extra detail.","the * symbol denotes a deduction!","the * symbol means a supplement.","touch * key then 7!","touch * key then 9.","tweet #bye for more!","tweet #welcome for more.","use the * key for help!","using investor #7961."]
              },
              "StatP3":
              {  
                "I1": ["Because a person could need","Because anybody could look for","Because anyone might be needing","Because it is a little likely you want","Because it is a real possibility you need","Because it is likely you might want","Because it is possible you need","Because one might require","Because somebody might require","Because someone could need","Because you may need","Because you may want","Because you might need","Because you might require","Given the case a person wants","Given the case somebody requires","Given the scenario anyone needs","If a colleague is needing","If a consultant needs","If and only if a person needs","If and only if anybody wants","If and only if somebody requires","If concerned and need","If someone is wanting","If you happen to require","If you have to need","If you really need","If you still require","In case a consultant needs","In case anybody requires","In case someone wants","In the event a person needs","In the event anybody requires","In the event someone wants","On the assumption a person needs","On the assumption anyone requires","On the assumption somebody wants","Should others be looking for","Should others be requiring","Should you need","Should you require","So should you need","So should you require","So should you want"],
                "I2": ["a bit more","a lot more","added","additional","any further","extra","further","increased","more","new","other","some","some further","some more","supplementary"],
                "I3": ["advice,","assistance,","coaching,","concepts,","directions,","documents,","game plans,","grounding,","guidance,","ideas,","information,","input,","instruction,","opinions,","outlines,","practice,","preparation,","proposals,","reminders,","schemes,","solutions,","suggestions,","support,","theories,","tips,","training,","understanding,","warnings,"],
                "I4": ["do not forget to contact","do not forget to get in touch with","do not forget to reach out to","do not worry about asking","do not worry about contacting","do not worry about reaching out to","feel free to connect with","feel free to interact with","please do not forget to contact","please do not hesitate to contact","please ensure you contact","please get in touch with","please make sure to contact","please remember to contact","take the chance to reach out to","then attempt to contact","then drop a line to","then feel free to connect with","then feel free to reach out to","then get in touch with","then give a call to","then make a call to","then pick up the phone to","then reach out to"],
                "I5": ["our","the"],
                "I6": ["desk","group","helpdesk","helpline","office","personnel","staff","team","workers"],
                "I7": ["as follows:","at:","by calling:","by contacting the following:","by dialing:","by getting in touch with:","by ringing:","on:","referring to the following:","using the following:","using:"], 
                "I8": ["RAND_PHONE"],
                "I9": ["or please"],
                "I10": ["contact","email","email online","if you prefer, contact","mail","message","message online at","respond to","thru email at","type email","use email","use online email","use the account","use the address","write to"],
                "I11": ["admin@","affiliates@","billing@","careers@","goodday@","hello@","help@","info@","media@","partners@","press@","service@","services@","support@","webmaster@"],
                "I12": ["RAND_WEBNAME"],
                "I13": ["Call extension 1","Call us ASAP","Complete by COB","Contact extension 2","Contact us ASAP","Dial extension 3","Don't forget by COB","Get back to us ASAP","Leave a message ASAP","Leave a voice mail ASAP","Note needed by COB","Participate by COB","Phone extension 4","Press extension 5","Reply by COB"],
                "I14": ["at"],
                "I15": ["7:00 a.m.","7:15 a.m.","7:30 a.m.","7:45 a.m.","8:00 a.m.","8:15 a.m.","8:30 a.m.","8:45 a.m.","9:00 a.m.","9:15 a.m.","9:30 a.m.","9:45 a.m.","10:00 a.m.","10:15 a.m.","10:30 a.m.","10:45 a.m.","11:00 a.m.","11:15 a.m.","11:30 a.m.","11:45 a.m.","12:00 p.m.","12:15 p.m.","12:30 p.m.","12:45 p.m.","1:00 p.m.","1:15 p.m.","1:30 p.m.","1:45 p.m.","2:00 p.m.","2:15 p.m.","2:30 p.m.","2:45 p.m.","3:00 p.m.","3:15 p.m.","3:30 p.m.","3:45 p.m.","4:00 p.m.","4:15 p.m.","4:30 p.m.","4:45 p.m.","5:00 p.m.","5:15 p.m.","5:30 p.m.","5:45 p.m.","6:00 p.m."],
                "I16": ["e.g. afternoon or evening.","e.g. before closing.","e.g. before noon.","e.g. by end of day.","e.g. early hours.","e.g. early or late.","e.g. morning or afternoon.","e.g. morning or evening.","e.g. morning or late.","e.g. while staff are in.","i.e. business hours.","i.e. daytime.","i.e. during office hours.","i.e. duty hours.","i.e. operational time.","i.e. this afternoon.","i.e. this morning.","i.e. today.","i.e. when offices are open.","i.e. when you can."]
              },
    "version": "1.0"
  };

function buildRandomTestContent(paras){

      var tempString, myString = "";
    
       for(var i = 0; i < paras.length; i++) {
          var sente = paras[i];
          myString += "<p>";
          for (var j = 0; j < sente.length; j++) {
            var temp = sente[j];

            tempString = temp[Math.floor(Math.random() * temp.length)];
                  if (tempString.indexOf("RAND_NAME") > -1){
                    tempString = 'at the ' + chance.name();
                  }
                  if (tempString.indexOf("RAND_WEEKDAY") > -1){
                    tempString = chance.weekday();
                  }
                  if (tempString.indexOf("RAND_JOB") > -1){
                    tempString = chance.profession() + '.';
                  }
                  if (tempString.indexOf("RAND_PERCENT") > -1){
                    tempString = chance.floating({ min: 0.1, max: 99.9, fixed: 1 }) + '%';
                  }
                  if (tempString.indexOf("RAND_MONTH") > -1){
                    tempString = chance.month();
                  }
                  if (tempString.indexOf("RAND_YEAR") > -1){
                    tempString = chance.year({ min: 2020, max: 2060 }).toString();
                  }
                  if (tempString.indexOf("RAND_DATE") > -1){
                    tempString = chance.integer({ min: 1, max: 12 }) + '/' + chance.integer({ min: 01, max: 31 }) + '/' + chance.integer({ min: 20, max: 23 }) + '.';
                  }
                  if (tempString.indexOf("RAND_NUMBER10000") > -1){
                    tempString = addCommas(chance.floating({ min: 10, max: 10000, fixed: 0 })).toString();
                  }
                  if (tempString.indexOf("RAND_DOLLAR") > -1){
                    tempString = chance.dollar({max: 99}).toString();
                  }
                  if (tempString.indexOf("RAND_PHONE") > -1){
                    tempString = chance.phone().toString();
                  }
                  if (tempString.indexOf("RAND_WEBNAME") > -1){
                    tempString = chance.syllable().toString() + '.' + chance.tld().toString() + '.';
                  } 

           //if hyphenated or ending with @ symbol don't add a space
           if ((tempString.charAt(tempString.length-1) === "-") || (tempString.charAt(tempString.length-1) === "@")) {
           myString += tempString;
           } else {
            myString += tempString + ' ';
           }

          }
          
          myString = myString.trim(); //trim off the added space at the very end of each paragraph
          myString += "</p>";
       }

         return myString;
}


function addCommas(nStr){
  nStr += '';
  var x = nStr.split('.');
  var x1 = x[0];
  var x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
   x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
 }
function buildPage(t_type, t_time, c_ref) {
  if (sessionStorage.getItem(t_type+t_time+c_ref)) { //does it exist already
    theStringContent = JSON.parse(sessionStorage.getItem(t_type+t_time+c_ref));
  } else {
    var parasArray = [];
    if (t_type === "STR") {
      parasArray.push(Object.values(data.StrP1));
      parasArray.push(Object.values(data.StrP2));
        theStringContent = buildRandomTestContent(parasArray);
      //  $("#testref").hide().html("Letter keys, and 3 punctuation keys: . , ?").fadeIn('slow');
      $("#testref").hide().html("Straight").fadeIn('slow');
      } else {
        if (t_type === "STAT") {
          parasArray.push(Object.values(data.StrP3));
          parasArray.push(Object.values(data.StatP2));
          parasArray.push(Object.values(data.StatP3));
          theStringContent = buildRandomTestContent(parasArray);
          //$("#testref").hide().html("Letter keys, numbers, and many common symbols").fadeIn('slow');
          $("#testref").hide().html("Statistical").fadeIn('slow');
      }
    }//end if
  } //if else

 if (t_time === "ONE") {
   countDownSeconds = 60;
   startTimerText = "1 minute";
  } else if (t_time === "THREE") {
     countDownSeconds = 180;
     startTimerText = "3 minutes";
  } else if (t_time === "FIVE") {
    countDownSeconds = 300;
    startTimerText = "5 minutes";   
  }
 //}

 $("#settingsGp").removeClass("disableSettings");
($('#typingContent').css("font-size",defaultFontSize)); 
($('#typingContent').css("font-family",defaultFontFamily)); 
 $("#timer").addClass("ready shorterHeight");
 clearSpeed();
// $("#testref").hide().html(t_type).fadeIn('slow');
if (c_ref !== null) {
  $(".stats").removeClass("hideCandRef");
  $("#employeeID").hide().html(c_ref).fadeIn('slow');
}
 
 $('#speed').hide().html("0").fadeIn('slow');
 $('#noOfErrors').hide().html("0").fadeIn('slow');
 $("#timer").hide().html(startTimerText).fadeIn('slow');
 $("#headingErrorCnt").hide().html("Errors").fadeIn('slow');
 $("#headingTiming").hide().html("Timing").fadeIn('slow');
  $("#time,#date,#headingDate,#headingTime,#headingScore,#scoreRes,#headingRealAcc,#realAcc").hide();

  var para = document.createElement("p");
  para.innerHTML = theStringContent; //add the string content
 $('#typingContent').append(theStringContent);
 var paragraphsToType = $('#typingContent').find("p"); //retrieve from dom
 buildTheParagraphsToType(paragraphsToType);
 drawCursor(0, 0);
 sessionStorage.setItem(t_type+t_time+c_ref,JSON.stringify(theStringContent));

}

function buildTheParagraphsToType(ps) {
  for (var i = 0; i < ps.length; i++) {
    ps[i] = $(ps[i]); //copy into another object
    var lineText = $.trim(ps[i].text()).replace(/\t/g, " "); //removes any leading ending spaces, replaces tabs with a space;
    totalCharacters += lineText.length; //while looping each line adds all the chars
    ps[i][0].innerHTML = "";
    originalTexts[i] = lineText;
    lineLetters[i] = [];
    for (var j = 0; j < lineText.length; j++) {
      var letter = $("<span>" + lineText.charAt(j) + "</span>");
      ps[i].append(letter);
      lineLetters[i][j] = letter;
    }
    if (i === ps.length - 1) { //add one empty space to end of every P line except the very final one
      var lastLetter = $("<span></span>");
    } else {
      var lastLetter = $('<span class="enter">&nbsp;</span>'); //append a whitespace to the end of each line
    }
    lineLetters[i][j] = lastLetter;
    ps[i].append(lastLetter);
    originalTexts[i] += " ";
    totalCharacters -= 1; //substracting 1 for the very first hit: knocks off one // was outside of the for loop
  } //END: build all the letters into the P tags
 
 }

var keyDown = function (e) {
    //skip arrow keys & home keys, allow only shift+home combo
    if ($.inArray(e.keyCode, [37, 38, 39, 40]) !== -1) { e.preventDefault(); return; }
    if (e.keyCode === 36 && !e.shiftKey) { e.preventDefault(); return; }
    if (e.keyCode === 8 && (e.ctrlKey || e.shiftKey)) { //Ctrl or Shift + BACKSPACE
      e.preventDefault(); return;
    }
    if (e.keyCode === 91 && e.keyCode === 8) { //cmd and delete keys pressed.
      e.preventDefault(); return;
    }
    if (e.keyCode === 9) { //tab
      e.preventDefault(); return;
    }
    if (e.keyCode === 91) { //left win key
      e.preventDefault(); return;
    }
    if (e.keyCode === 27) { //esc
      e.preventDefault(); return;
    }

    var lastTypedLine = getLastLine(); //each line gets the whole of the last line typed
    var currentTypingPosition = lastTypedLine.length;
    //CHECK FOR SCROLLING UP AND DOWN
    //SOME KEYS NOT ELIGIBLE FOR SCROLL REGISTERING SHIFT, CTRL, ALT, CAPS LOCK ETC
    // if (!(e.keyCode === 16 || e.keyCode === 17 || e.keyCode === 18 || e.keyCode === 20)) {  
    //   checkNeedForScrolling(currentLineNumber, currentTypingPosition);
    // }
    //at first character of the typing - first key pressed. clear to this attempt
  //  if (currentTypingPosition === 0 && currentLineNumber === 0) {
      // $("#speed").text("--");

      //removeStaticCursor(0, 0);
  //  }

    if (e.keyCode === 8) {
      //BACKSPACE - unstyle last styled character
      //COMMENT THIS SECTION FOR Practice LESSONS
      //                $(".backspace").css('display', 'block').stop().fadeTo(150, .7).delay(300).fadeOut(700);
      //                e.preventDefault();
      //                return;
      //END COMMENT THIS SECTION FOR Practice LESSONS

      //                //COMMENT OUT FOLLOWING FOR LEARN LESSONS
      if (currentTypingPosition === 0 && currentLineNumber === 0) {
        e.preventDefault();
        return;
      }
      //the following moves cursor back up to the previous line at the end
      if (currentTypingPosition === 0 && currentLineNumber > 0) {
        removeCursor(currentLineNumber, currentTypingPosition);
        clearTextBackground(currentLineNumber, currentTypingPosition);
        currentLineNumber--;
        currentTypingPosition = originalTexts[currentLineNumber].length;
      }
      //on the same line for the backspace
      drawCursor(currentLineNumber, currentTypingPosition - 1);
      removeCursor(currentLineNumber, currentTypingPosition);
      clearTextBackground(currentLineNumber, currentTypingPosition - 1);
      if (!originalTexts[currentLineNumber]) {
        return;
      }
      //                //END COMMENT OUT FOR LEARN LESSONS
    }

    if (e.keyCode === 13) {   //ENTER key
      // console.log("ENTER KEY PRESSED");
      // if it is NOT the last line and if we are at the end of the line and
      if (
        currentLineNumber < originalTexts.length - 1 &&
        originalTexts[currentLineNumber].length - 1 === lastTypedLine.length
      ) {
        if (
          checkIfErrorPreviously(currentLineNumber, currentTypingPosition)
        ) {
          drawOrangeTextBackground(currentLineNumber, currentTypingPosition);
        } else {
          drawGreenTextBackground(currentLineNumber, currentTypingPosition);
        }
        removeCursor(currentLineNumber, currentTypingPosition);
        currentLineNumber++;
        drawCursor(currentLineNumber, 0);
      } else {
        //check if the whole text is typed at this point we are sure that the typed symbol was correct if we're at the end of last line - fire 'finishedcallback
        // if (finishCallBack) {
        //if we are at the end of all the typing and pressed ENTER
        if (
          originalTexts.length - 1 === currentLineNumber &&
          originalTexts[originalTexts.length - 1].length -
          2 /*substracting last whitespace*/ ===
          currentTypingPosition
        ) {
          // console.log("Pressed ENTER and we are at the end of all the typing. It's wrong.");
          //incorrect
          highlightError(currentLineNumber, currentTypingPosition);
          doFinishCallBack(); //within if ENTER key
          return;
        }
        // } // end if (finishCallBack)
        //error - pressed enter in the wrong place
        highlightError(currentLineNumber, currentTypingPosition);
        addClassErrValidate(currentLineNumber, currentTypingPosition);
        removeCursor(currentLineNumber, currentTypingPosition);
        drawCursor(currentLineNumber, currentTypingPosition + 1); //wrong add the cursor to the next
        //in the textTyped add a space to represent the Enter action
        e.preventDefault();
        e = new jQuery.Event("keydown");
        e.which = e.keyCode = 32;
        textTyped.trigger(e);
        textTyped.val((textTyped).val() + " ");
        return; //needed?}
      }
    } //end if keyCode is 13

    //some more preventative clicking

    //new ** disable the Settings button when started an attempt
    $("#settingsGp").addClass("disableSettings");

};

var keyPress = function (e) {
    isEOL = false;
    var lastTypedLine = getLastLine(); //gets the whole of the last line typed
    var currentTypingPosition = lastTypedLine.length;
    if (!startTime) { //if not set
      startTime = new Date().getTime();
      beginCountdown();
   //   $("#timer").removeClass("ready shorterHeight");
   $("#timer").removeClass("ready");
    }
    if (e.keyCode === 8 || e.keyCode === 13) {
      //if backspace or enter
      return; //function stops
    }
    if (!originalTexts[currentLineNumber]) {
      //quit out if there is nothing in the typingContent
      return;
    }
    //the following is a check to ensure not going beyond line length
    if (currentTypingPosition > originalTexts[currentLineNumber].length - 1) {
      e.preventDefault();
      return;
    }
    //check for EOL and no space permitted workaround
    if (e.keyCode === 32) { //space
      if (
        currentTypingPosition ===
        originalTexts[currentLineNumber].length - 1
      ) {
        isEOL = true;
      }
    }
    //a correct letter is about to be pressed
    if (
      originalTexts[currentLineNumber].substring(
        currentTypingPosition,
        currentTypingPosition + 1
      ) === String.fromCharCode(e.which) &&
      isEOL === false
    ) {
      //correct now mark green

      if (checkIfErrorPreviously(currentLineNumber, currentTypingPosition)) {
        drawOrangeTextBackground(currentLineNumber, currentTypingPosition);
      } else {
        drawGreenTextBackground(currentLineNumber, currentTypingPosition);
      }
      removeCursor(currentLineNumber, currentTypingPosition);
      drawCursor(currentLineNumber, currentTypingPosition + 1); //right add the cursor to the next
      //  isError = false;
      //correct date
      var cd = new Date().getTime();
      if (lastCorrectDate) {
        //recording current time
        var t = cd - lastCorrectDate;
        times.push(t);
        if (times.length === speedInterval) {
          //calculate average and call speed feedback
          var tot = 0;
          $.each(times, function (i, val) {
            tot += val;
          });
          //average speed of typing one character
          var avg = tot / (times.length);
          var speed = millisInMinute / avg / 5; //5 represents one word 
          $('#speed').html(parseInt(speed)+'<sup>wpm</sup>'); //typed characters per minute
          times.length = 0;
        }
      }
      lastCorrectDate = cd;

      //} // end if (speedCallBack)
    } else {
      //incorrect
      // console.log("INCORRECT");
      highlightError(currentLineNumber, currentTypingPosition); //adds class redError
      addClassErrValidate(currentLineNumber, currentTypingPosition);
      removeCursor(currentLineNumber, currentTypingPosition);
      // Detect current character & shift key
      var character = e.keyCode ? e.keyCode : e.which;
      var sftKey = e.shiftKey ? e.shiftKey : character == 16 ? true : false;
      var isCapsLock =
        (character >= 65 && character <= 90 && !sftKey) ||
        (character >= 97 && character <= 122 && sftKey);
      if (isCapsLock) {
        $(".capslock")
          .css("display", "block")
          .stop()
          .fadeTo(150, 0.7)
          .delay(300)
          .fadeOut(700);
      }
      if (
        originalTexts[currentLineNumber].length ===
        currentTypingPosition + 1
      ) {
        e.preventDefault();
        e = new jQuery.Event("keydown");
        e.which = e.keyCode = 13;
        textTyped.trigger(e);
        textTyped.val((textTyped).val() + "\n");
        return;
      }
      drawCursor(currentLineNumber, currentTypingPosition + 1); //wrong add the cursor to the next
      // e.preventDefault(); //for the learn lessons - stop user continuing //also for learn - future feature - turn off WPM and error recording
    }
    //if we are at the end of all the typing
    if (originalTexts.length - 1 === currentLineNumber && originalTexts[originalTexts.length - 1].length - 2 /*substracting last whitespace*/ === currentTypingPosition) {
      //  console.log("Within Keypress and at the end of all the typing");
      doFinishCallBack();
    }
    //} //end if (finishCallBack)
};

var keyUp = function (e) {
    var noOfErrors = countNoOfErrors();
    $("#noOfErrors").text(noOfErrors); //calc at end of each keyup
    //watch for poor accuracy
    // console.log(noOfErrors);
    var numberInTyping = countNoOfCharactersInTyping();
    // console.log(numberInTyping);
    var errPercent = ((((numberInTyping - noOfErrors) / numberInTyping) * 100).toFixed(2));
    //  console.log(" errPercent "+errPercent);

    if (errPercent < 90) { //should be < 90
      $('.modal').addClass('is-active');
      $('#warningErrors').modal('show');
      $("#timer").countdowntimer("pause", "pause");
      $("#timer").countdowntimer("destroy");
      disableTyping();
      var lastTypedLine = getLastLine(); //each line gets the whole of the last line typed
      var currentTypingPosition = lastTypedLine.length;
      removeCursor(currentLineNumber, currentTypingPosition);
    }

    // Cancel existing timeout, if applicable
    if (timeoutId > 0) {
      window.clearTimeout(timeoutId);
    }
    // Start a timeout for 5 seconds- this will be cancelled above
    // if user continues typing
    timeoutId = window.setTimeout(function () {
      if (!(isEnded)) { //only if doFinishCallBack not called
        $("#speed").hide().html("0").fadeIn('slow'); 
      }
    }, 5000);

}; 

function bindTheEvents() {
    textTyped.keypress(keyPress);
    textTyped.keydown(keyDown);
    textTyped.keyup(keyUp);
    textTyped.focus();
}

function countNoOfCharactersInTyping() {
    //how chars in the passage
    var charCnt = 0;
    $.each(lineLetters, function (i, val) {
      $.each(val, function (s, value) {
        charCnt++;
      });
    });
    return charCnt;
}

function countNoOfErrors() {
    //check how many errors at the moment
    var erCount = 0;
    $.each(lineLetters, function (i, val) {
      $.each(val, function (s, value) {
        if (value.hasClass("redError")) {
          erCount++;
        }
      });
    });
    return erCount;
}

function countNoCorrect() {
    //check how many errors at the moment
    var corCount = 0;
    $.each(lineLetters, function (i, val) {
      $.each(val, function (s, value) {
        if ((value.hasClass("green")) || (value.hasClass("orange"))) {
          if (!(value.hasClass("redError"))) {
            corCount++;
          }
        }
      });
    });
    return corCount;
}

function reportResults(speed, accuracy) {
   $('#realAcc').hide().html(accuracy+"%").fadeIn('slow');
   $("#headingDate,#headingTime,#headingScore,#headingRealAcc").hide().fadeIn('slow');
   $("#date").hide().html(formatDate()).fadeIn('slow');
    $("#time").hide().html(formatTime()).fadeIn('slow');
    $("#print1").hide().fadeIn('slow');
   // $("#scoreRes").hide().html(calcScore(speed,accuracy)).fadeIn('slow');
}

// function calcScore(sp,acc) { 
//     var sc = 0;
//     if (coursealt.substring(0,3) === "KTX"){
//        if (acc > 89) {
//             if (sp > 24) {
//               sc = 100;
//           } else if (sp < 25) {
//             sc = 67+(3*(sp-14));
//           } 
//        }
//        if (acc < 90) {
//             if (sp > 13) {
//               sc = 65;
//           } else if (sp < 14 && sp > 1) {
//             sc = (5*(sp-1));
//           } else if (sp == 1) {
//             sc = 5;
//           } else if (sp == 0) {
//             sc = 0;
//           }
//       }
//     } // end if KTX
//     if (coursealt.substring(0,3) === "K1X"){
//       if (acc > 89) {
//            if (sp > 44) {
//              sc = 100;
//          } else if (sp < 45 && sp > 34) {
//              sc = 78+(2*(sp-34));
//          } else if (sp < 35 && sp > 24) {
//              sc = 69+(1*(sp-24));
//          } else if (sp < 25 && sp > 5) {
//             sc = 49+(1*(sp-5));
//          } else if (sp == 5) {
//             sc = 40;
//          } else if (sp == 4) {
//           sc = 30;
//          } else if (sp == 3) {
//           sc = 20;  
//          } else if (sp == 2) {
//           sc = 10;
//          } else if (sp == 1) {
//           sc = 5;
//          } else if (sp == 0) {
//           sc = 0;
//          }       
//       } 
//       if (acc < 90) {
//           if (sp > 23) { 
//             sc = 68;
//         } else if (sp < 24 && sp > 5) {
//             sc = 49+(1*(sp-5));
//         } else if (sp < 6 && sp > 1) {
//             sc =  (10*(sp-1));
//         } else if (sp == 1) {
//           sc = 5;
//         } else if (sp == 0) {
//           sc = 0;
//         } 
//      }
//    } // end if K1X
//    if (coursealt.substring(0,3) === "EK2"){
//     if (acc > 89) {
//       if (sp > 54) {
//            sc = 100;
//        } else if (sp < 55 && sp > 44) {
//            sc = 78+(2*(sp-44));
//        } else if (sp < 45 && sp > 34) {
//            sc = 69+(1*(sp-34));
//        } else if (sp < 35 && sp > 15) {
//            sc = 49+(1*(sp-15));
//        } else if (sp < 16 && sp > 11) {
//            sc = (10*(sp-11));
//        } else if (sp < 12 && sp > 0) {
//            sc = 5;
//        } else if (sp == 0) {
//            sc = 0;
//        }       
//     } 
//     if (acc < 90) {
//      if (sp > 33) { 
//           sc = 68;
//       } else if (sp < 34 && sp > 15) {
//           sc = 49+(1*(sp-15));
//       } else if (sp < 16 && sp > 11) {
//           sc =  (10*(sp-11));
//       } else if (sp < 12 && sp > 0) {
//         sc = 5;
//       } else if (sp == 0) {
//         sc = 0;
//       } 
//    }
//  } // end if EK2

//     return sc;
// }

function formatDate() {
    var now = new Date();
   // function pad2(number) { return (number < 10 ? '0' : '') + number }
    var trimmedYear = now.getFullYear().toString().substr(2,2);
    return (now.getMonth() + 1) + "/" + now.getDate() + "/" + trimmedYear;
}

function formatTime() {
    var now = new Date();
    function pad2(number) { return (number < 10 ? '0' : '') + number }
    return pad2(now.getHours()) + ':' + pad2(now.getMinutes()) + ':' + pad2(now.getSeconds());
}

function doFinishCallBack() {
    isEnded = true;
    $("#timer").countdowntimer("pause", "pause");
    $("#timer").countdowntimer("destroy");
   // $("#headingErrorCnt").hide().html("Error count").fadeIn('slow');
    $("#headingTiming").hide().html("Time remaining").fadeIn('slow');

    disableTyping();

  //  $("#settingsGp").removeClass("disableSettings");

    var lastTypedLine = getLastLine(); //each line gets the whole of the last line typed
    var currentTypingPosition = lastTypedLine.length;
    removeCursor(currentLineNumber, currentTypingPosition);
    var time = new Date().getTime() - startTime;
    var errorCount = countNoOfErrors();
    $("#noOfErrors").hide().html(errorCount).fadeIn('slow');
    var correctCount = countNoCorrect();
    var totalCharactersAllTyped = errorCount + correctCount;

    var overallSpeed = parseInt((totalCharactersAllTyped - errorCount) / 5 / (time / 6e4) + .5); //tested using one paragraph //6e4 equals 60000
    if (overallSpeed < 0) overallSpeed = 0;
    var errorCountPercent = Math.round(
      ((totalCharactersAllTyped - errorCount) / totalCharactersAllTyped) * 100
    );
    if (errorCountPercent < 0) errorCountPercent = 0;
    $('#speed').hide().html(parseInt(overallSpeed)+'<sup>wpm</sup>').fadeIn('slow');

    reportResults(parseInt(overallSpeed), parseInt(errorCountPercent));
    typable.animate({ 'margin-top': '0px' /*, opacity: 0.75 */ }, 1000);
    inview.css({ 'height': 'auto', 'overflow': 'normal' });
    //make all the text 25px font size at finish ready for print
    $('#typingContent').css("font-size","25px");
   
};

function disableTyping() {
    textTyped.attr("disabled", true);
    textTyped.off("keypress");
    textTyped.off("keydown");
    textTyped.off("keyup");
};

function beginCountdown() {

    $("#timer").countdowntimer({
      seconds: parseInt(countDownSeconds),
      size: "lg",
      displayFormat: "MS",
      timeUp: timeIsUp
    });
}

function timeIsUp() {
    //Your code
    doFinishCallBack();
}

function clearTextBackground(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].removeClass("green orange redError"); }
}

function clearAllClasses(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) {
      lineLetters[line][position].removeClass("green orange redError errValidate");
    }
}

function drawGreenTextBackground(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].addClass("green"); }
}

function drawOrangeTextBackground(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].addClass("orange"); }
    // if (lineLetters[line] && lineLetters[line][position]) {lineLetters[line][position].addClass("orange").removeClass("redError");}
    //console.log("decrease error count");
}

function addClassErrValidate(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].addClass("errValidate"); }
}

function checkIfErrorPreviously(line, position) {
    if (lineLetters[line][position].hasClass("errValidate")) { return true; }
}

function drawCursor(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].addClass("cursor"); }
    checkNeedForScrolling(line, position);
}

function removeCursor(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].removeClass("cursor"); }
}

function highlightError(line, position) {
    if (lineLetters[line] && lineLetters[line][position]) { lineLetters[line][position].addClass("redError"); }
    // increaseErrorCount();
}

function clearSpeed() { lastCorrectDate = null; times.length = 0; }

function getLines() {
    var currentText = textTyped.val();
    var allLines = currentText.split(/\n/g); //delete any enters globally
    return allLines; //an array of the lines
}

function getLastLine() {
    var allLines = getLines();
    return allLines[allLines.length - 1];
}

function checkNeedForScrolling(currentLineNumber, currentTypingPosition) {

    var midway = inview.height() / 5 * 3 + 10; //178
   // console.log("midway " + midway);
    //console.log("inview.height()"+inview.height());
    var getTheObj = lineLetters[currentLineNumber][currentTypingPosition];
    var theCurrSpanOffsetTop = getTheObj[0].offsetTop; //console.log("theCurrSpanOffsetTop " + theCurrSpanOffsetTop);
    var theCurrSpanOffsetLeft = getTheObj[0].offsetLeft; //console.log("theCurrSpanOffsetLeft " + theCurrSpanOffsetLeft);
    var theHeightOfTheSpan = getTheObj[0].offsetHeight; //console.log("theHeightOfTheSpan " + theHeightOfTheSpan);
  //  console.log("theCurrSpanOffsetTop " + theCurrSpanOffsetTop);
    if (theCurrSpanOffsetLeft <= 21) { // 7/11/20 was 18 befpre
      //ok let's get the current MarginTop for typable
      var typablesCurrMargTop = parseInt(typable.css("margin-top"));
      if (theCurrSpanOffsetTop >= midway) {  // cursor span is more than half way thru inview
        snum += theHeightOfTheSpan + 7; //hardcoded for now - 49px for the span plus 7
        typable.css("margin-top", "-" + snum + "px"); //maybe need a timeout type code to only proceed when css set
      } else {
        // if (theCurrSpanOffsetTop < 150 || theCurrSpanOffsetTop > 0) {
        if (!(typablesCurrMargTop == 0)) { // don't scroll the first 3 lines or so
          snum -= theHeightOfTheSpan + 7; //hardcoded for now - 49px for the span plus 7
          typable.css("margin-top", "-" + snum + "px"); //maybe need a timeout type code to only proceed when css set
        }
      }
    }
} //end checkNeedForScrolling

$('#btnRestart').on("click", function (e) {
 // console.log("restarted");
    e.preventDefault();

    if (!($("#timer").hasClass("ready"))) { //only destroy timer is it has this class i.e. keypress not started  
      $("#timer").countdowntimer("pause", "pause");
      $("#timer").countdowntimer("destroy");
    }
    disableTyping();
    $.each(lineLetters, function (i, line) {
      //clear backgrounds of all texts
      $.each(line, function (j, letter) {
        clearAllClasses(i, j);
        removeCursor(i, j);
        //letter.removeClass('cursor');
      });
    });
    $("#typingContent").empty(); //empty existing content
    buildPage(testtype,testtime,candref);
    typable.animate({ 'margin-top': '0px'/*, opacity: 0.75 */}, 1000);

    $('.modal').removeClass("is-active");
    $('#warningErrors').modal('hide');
    $('#warningNoKeyb').modal('hide');
    // inview.css({'height': '280px', 'overflow':'hidden'});
    snum = 0;
    inview.css({ 'height': '560px', 'overflow': 'hidden' });

   // $("#resultToPrint").html("");
   // $("#print1").css('visibility', 'hidden'); //show the result text and print button
   $("#print1").hide();

    currentLineNumber = 0;
    textTyped
      .val("")
      .attr("disabled", false);
    errorCount = 0;

    // isError = false;
    clearSpeed();
    startTime = null;
    textTyped.keypress(keyPress);
    textTyped.keydown(keyDown);
    textTyped.keyup(keyUp);
    textTyped.focus();
}); //end $('#btnRestart').on("click", function(e)

$('#settingsPanel').on("click mouseover", function (e) {
    //if user clicks the a hyperlink part in the panel
    if (e.target.tagName.toLowerCase() === 'a') {
      var whatwasselected = $(e.target).parent();
      var theSiblings = $(e.target).parent().siblings();
      var userChoice = e.target.innerHTML;
      typContChanging = $('#typingContent');
      // theSiblings.removeClass('is-active');
      // whatwasselected.addClass('is-active');
      theSiblings.removeClass('active');
      whatwasselected.addClass('active');
      switch (userChoice) {
        case 'Small':
          typContChanging.css("font-size", "25px");
          defaultFontSize = "25px";
          break;
        case 'Normal':
          typContChanging.css("font-size", "35px");
          defaultFontSize = "35px";
          break;
        case 'Large':
          typContChanging.css("font-size", "45px");
          defaultFontSize = "45px";
          break;
        case 'Droid Sans Mono':
          typContChanging.css("font-family", "droid_sans_monoregular");
          defaultFontFamily = "droid_sans_monoregular, courier, Tahoma, Sans-Serif";
          break;
        case 'Ubuntu Mono':
          typContChanging.css("font-family", "ubuntu_mono");
          defaultFontFamily = "ubuntu_mono, courier, Tahoma, Sans-Serif";
          break;
        case 'Courier Prime':
          typContChanging.css("font-family", "courier_prime");
          defaultFontFamily = "courier_prime, courier, Tahoma, Sans-Serif";
          break;
        case 'PT Mono':
          typContChanging.css("font-family", "PT_mono");
          defaultFontFamily = "PT_mono, courier, Tahoma, Sans-Serif";
          break;
        case 'Source Code Pro':
          typContChanging.css("font-family", "source_code_pro");
          defaultFontFamily = "source_code_pro, courier, Tahoma, Sans-Serif";
          break;
        default:
          break

      }
      //run a check to see where the cursor is. And rescroll the text so the cursor is in the center of the page.
      textTyped.focus();
      var lastTypedLine2 = getLastLine(); //each line gets the whole of the last line typed
      var currentTypingPosition2 = lastTypedLine2.length;
      checkNeedForScrolling(currentLineNumber, currentTypingPosition2)

    }
});





  $('#instructionsPanel').on({
    // "hide.bs.dropdown":  function() {
    //    // $('.dropdown-menu', this).addClass('animated fadeOutDown');
    //    console.log("hide");
    // },
    "hidden.bs.dropdown": function () {
        textTyped.focus();
    }
});
$('#settingsPanel').on({
  // "hide.bs.dropdown":  function() {
  //    // $('.dropdown-menu', this).addClass('animated fadeOutDown');
  //    console.log("hide");
  // },
  "hidden.bs.dropdown": function () {

      textTyped.focus();
  }
});

//});
bindTheEvents();
buildPage(testtype, testtime, candref);

};