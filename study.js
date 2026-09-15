export const sections = [
  {start:1,end:9,title:'The illusion of security',short:'Pride',label:'1–9'},
  {start:10,end:14,title:'A brother betrayed',short:'Violence',label:'10–14'},
  {start:15,end:16,title:'The day of Yahweh',short:'The day',label:'15–16'},
  {start:17,end:21,title:'The kingdom will be Yahweh’s',short:'Restoration',label:'17–21'}
];
export const pillars = [
  {id:'pride',title:'Pride & false security',ref:'1:1–9',verse:3,icon:'mountain',image:'concept-pride-false-security.webp',alt:'A symbolic engraving of an eagle above a high Edomite rock fortress with hidden treasure chambers and departing allies below.',description:'Rocky heights, trusted allies, and human wisdom cannot protect Edom from the judgment announced by Yahweh.',question:'What makes Edom feel secure? What does the text say will happen to each source of confidence?'},
  {id:'brother',title:'Our responsibility to others',ref:'1:10–14',verse:10,icon:'people',image:'concept-responsibility-others.webp',alt:'A symbolic engraving at an ancient crossroads where a traveler reaches toward a fallen brother while other witnesses stand aside.',description:'The accusation moves from standing aside to rejoicing, plundering, and handing over those who escape.',question:'Follow the actions in verses 11–14. How does indifference become participation in harm?'},
  {id:'day',title:'The day of Yahweh',ref:'1:15–16',verse:15,icon:'sun',image:'concept-day-of-yahweh.webp',alt:'A symbolic engraving of ancient nations beneath a radiant sky, with an overturned cup and balanced scales in the foreground.',description:'The horizon widens from Edom to all the nations. The deeds of the nations return upon their own heads.',question:'What changes when the prophecy moves from Edom to all the nations?'},
  {id:'kingdom',title:'Restoration & God’s kingdom',ref:'1:17–21',verse:21,icon:'crown',image:'concept-restoration-kingdom.webp',alt:'A hopeful symbolic engraving of families ascending through a restored valley toward Mount Zion and its open gates.',description:'The closing verses speak of escape, holiness, restored possession, and the kingdom belonging to Yahweh.',question:'Compare the mountain of Esau with Mount Zion. How does the last sentence bring the book together?'}
];
// Editorial reading aids grounded in the cited verses, not pastoral sermon notes.
export const glossary = [
  ['Yahweh',['yahweh'],'day',15,'God’s personal name in the WEB. Yahweh speaks the judgment against Edom and is the one to whom the kingdom belongs.'],
  ['Edom',['edom'],'pride',1,'The people addressed by the prophecy. The book connects Edom with Esau and names Jacob as their brother.'],
  ['Esau',['esau'],'pride',6,'The ancestral name used for Edom and its mountain country. Watch how the house of Esau is contrasted with the house of Jacob.'],
  ['Pride',['pride'],'pride',3,'The confidence of a heart that believes its high position makes it untouchable. Verse 3 says that this confidence deceives.'],
  ['Heart',['heart'],'pride',3,'The inner place of confidence and self-talk. Edom’s question, “Who will bring me down?”, reveals the assumption beneath its pride.'],
  ['High',['high'],'pride',4,'The height of Edom’s dwelling becomes a picture of presumed safety. Even a nest among the stars is within Yahweh’s reach.'],
  ['Mountain',['mountain','mountains'],'pride',8,'A place of strength and identity. The mountain of Esau and Mount Zion help frame the movement from judgment to restoration.'],
  ['Understanding',['understanding'],'pride',7,'The discernment on which Edom relies. The prophecy announces that both understanding and wise men will fail.'],
  ['Brother',['brother'],'brother',10,'The relationship that makes Edom’s violence especially grievous. Jacob is a brother whose suffering calls for care.'],
  ['Jacob',['jacob'],'brother',10,'The ancestral name for the people Edom has harmed. The house of Jacob later appears among those who regain their possessions.'],
  ['Violence',['violence'],'brother',10,'The wrong done against Jacob. The following verses name concrete ways Edom participated in another people’s disaster.'],
  ['Day',['day'],'day',15,'A repeated time marker. Days of distress and calamity lead toward the day of Yahweh, when the nations face an answer for their deeds.'],
  ['Nations',['nations'],'day',15,'The peoples beyond Edom and Judah. Verse 15 makes clear that the day of Yahweh concerns all the nations.'],
  ['Disaster',['disaster'],'brother',12,'The ruin of another people. The reader is invited to notice the prohibition against looking down on a brother in that moment.'],
  ['Distress',['distress'],'brother',14,'A time of severe trouble. Edom is told neither to boast over those suffering nor to hand over those who remain.'],
  ['Calamity',['calamity'],'brother',13,'The repeated description of the suffering of God’s people in verse 13. The repetition emphasizes the setting of Edom’s actions.'],
  ['Jerusalem',['jerusalem'],'brother',11,'The city whose gates foreigners entered. The book later speaks of its captives possessing cities again.'],
  ['Deeds',['deeds'],'day',15,'What a person or people have done. The text announces a correspondence between Edom’s actions and what will return upon it.'],
  ['Holy',['holy'],'kingdom',17,'Set apart for God. The word describes God’s mountain in verse 16 and the condition of Mount Zion in verse 17.'],
  ['Zion',['zion'],'kingdom',17,'The mountain associated here with escape, holiness, and the final announcement of Yahweh’s kingdom.'],
  ['House',['house'],'kingdom',18,'A people or family line rather than simply a building. Jacob, Joseph, and Esau are named as houses in verse 18.'],
  ['Fire',['fire'],'kingdom',18,'An image of consuming judgment. Jacob is pictured as fire and Joseph as a flame, while Esau is pictured as stubble.'],
  ['Possessions',['possessions'],'kingdom',17,'What the house of Jacob will regain. Read this noun alongside the repeated verb “possess” in the final verses.'],
  ['Captives',['captives'],'kingdom',20,'People carried away from their land. Their appearance near the end of the book forms part of the promise of restored possession.'],
  ['Kingdom',['kingdom'],'kingdom',21,'The final word about rule and belonging: the kingdom will be Yahweh’s. Human powers do not have the last word.']
].map(([word,forms,pillar,verse,definition])=>({word,forms,pillar,verse,definition}));
const actions = [['Bring',['bring','brought']],['Deceive',['deceived']],['Cut',['cut']],['Possess',['possess']],['Drink',['drink','drunk']],['Escape',['escape']],['Stand',['stand','stood']],['Look',['look']],['Rejoice',['rejoice']],['Deliver',['deliver']],['Destroy',['destroy']],['Return',['return']],['Judge',['judge']],['Devour',['devour']]];
const pronouns = ['you','your','they','their','them','we','i','he','his','her','me','my'];
export function tokens(text) {return text.toLowerCase().match(/[a-z]+(?:[’'][a-z]+)?/g)?.map(w=>w.replace(/[’']s$/,'')) || [];}
export function matches(text,forms) {return tokens(text).filter(w=>forms.includes(w)).length;}
export function analyze(verses,category='keywords') {
 const entries=category==='keywords'?glossary:category==='actions'?actions.map(([word,forms])=>({word,forms})):pronouns.map(word=>({word,forms:[word]}));
 return entries.map(entry=>{const distribution=sections.map(s=>Object.entries(verses).filter(([v])=>+v>=s.start&&+v<=s.end).reduce((n,[,t])=>n+matches(t,entry.forms),0));return {...entry,distribution,count:distribution.reduce((a,b)=>a+b,0),verseNumbers:Object.entries(verses).filter(([,t])=>matches(t,entry.forms)).map(([v])=>+v)};}).filter(e=>e.count).sort((a,b)=>b.count-a.count||a.word.localeCompare(b.word));
}
