let button = document.querySelector('#btn-click');
let advice = document.querySelector('.advise');
 

 const quotes =[{
    advice: `If someone asks for your opinion, give it to them. Don’t sugarcoat it and don’t be an asshole about it.`,
 }, {
    advice: `If you don’t like someone, be honest with yourself. Don’t be a jerk, but don’t fake liking them just because that’s the “right” thing to do.`
 },{
    advice: `If you want something—whether it’s a promotion, person, or anything else—you won’t get it just because you’re nice. You’ll have to go out there and make it happen, even if you might step on some toes along the way.`
 },{
    advice:`You’ll have to be direct. Upfront. Straightforward. And not everyone likes that. That’s fine. They don’t have to. Let them do them.`
 },{
    advice:`But the truth is, whether in personal life or business, most people are tired of nice. They want authentic. They want raw. They want real. They don’t want nice. They want you.`
 },{
    advice:`Don’t CHASE people. Be yourself, do your own thing & work hard. The RIGHT people….. the ONES who really belong in your Life will come to you & STAY `
 },{
    advice:`Some of the best ADVICE You’ll ever get will come from LISTENING to your INSTINCTS`
 },{
    advice: `SIX months from NOW, you can be in a totally different space from NOW MENTALLY, SPIRITUALLY & FINANCIALLY. Keep WORKING & BELIEVING yourself`
 },{
    advice: `You’ve to get up every MORNING with DETERMINATION if you want to go to bed with SATISFACTION`
 },{
    advice: `An EMOTIONAL mind rarely makes LOGICAL & RATIONAL decisions. Emotion is often like CLOUDS, obscuring & shielding you from the warmth & logic the sun provides. Allow your mind the ability to ELIMINATE the emotional clouds that so often cause your DOWNFALL`
 }]

 button.addEventListener('click', function(){
    let random = Math.floor(Math.random() *quotes.length);

    advice.innerText = quotes[random].advice;

 })