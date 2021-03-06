const AlexaSkillServer = require('alexa-skill-server');

const answers = {};
answers['en'] = ['Yes!', 'Of course!', 'Definitely!', 'Absolutely!', 'Do it!',
    'Sure thing!', 'By all means!', 'Most definitely!'];

answers['de'] = ['Ja!', 'Unbedingt!', 'Auf jeden Fall', 'Natürlich!',
    'Zweifelsfrei!', 'Worauf wartest du noch?', 'Ich sehe nichts, was dagegen spricht!'];


class BeerOracleSkillServer extends AlexaSkillServer {

    onLaunchRequest(request, session) {
        return this.onStartIntentRequest(request, session);
    }

    onStartIntentRequest(request, session) {
        const [language, dialect] = request.locale.split('-');
        const localeAnswers = answers[language] || answers['en'];
        const selectedAnswer = localeAnswers[Math.floor(Math.random()*localeAnswers.length)];

        return this.respond().say(selectedAnswer).endSession();
    }
}

(new BeerOracleSkillServer()).start();
