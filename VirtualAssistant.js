const VirtualAssistant = (element = null, options) => {
	let SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
	let virtualAssistant = new SpeechRecognition()

	const microphone = element ? document.querySelector(element) : document.querySelector('.microphone');


	let defaults = options ? {
		lang: options.lang || 'vi-Vi',
		continuous: options.continuous || 'false'
	} : {
		lang: 'vi-Vi',
		continuous: 'false'
	}

	const __init = (defaults) => {
		virtualAssistant.lang = defaults.lang;
		virtualAssistant.continuous = defaults.continuous
	}

	const handleResult = (result) => {
		console.log('result: ' + result)
	}

	return {
		start: () => {
			__init(defaults);
			microphone.addEventListener('click', (e) => {
				e.preventDefault()

				virtualAssistant.start()
				microphone.classList.add('animate-pulse')
				microphone.classList.add('recording')

			})

			virtualAssistant.onspeechend = () => {
				virtualAssistant.stop()
			}

			virtualAssistant.onresult = (e) => {
				const result = e.results[0][0].transcript
				handleResult(result)

				virtualAssistant.stop()
				microphone.classList.remove('animate-pulse')
				microphone.classList.remove('recording')
			}

			virtualAssistant.onerror = (err) => {
				console.log('onerror: ' + err)
				microphone.classList.remove('animate-pulse')
				microphone.classList.remove('recording')
			};
		},
		stop: () => {
			virtualAssistant.stop()
			microphone.classList.remove('animate-pulse')
			microphone.classList.remove('recording')
		}
	}
}

export default VirtualAssistant();
