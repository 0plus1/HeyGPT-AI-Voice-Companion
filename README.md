# HeyGPT Voice Assistant
Voice based interface to ChatGPT

### Description
The project, built in node, aims to be a platform agnostic application to interact with ChatGPT using your voice, like a natural conversation.

The end goal is to provide an easy to install solution for a RaspberryPI based assistant.

This package aims to minimize its reliance on external packages as much as possible.

### Install
At this stage this project can only run on MacOS, more adapters will come soon.
The project requires node 18+

Create a `.env` file on the root of the project with the contents in .env.example

Then run `yarn install` and `yarn start` to launch.

More options can be found in `src/constants.js`

### speech-to-text engines
The speech-to-text supports the following engines:

#### OSX (free)
The functionality requires the following packages to be installed:
- [hear](https://github.com/sveinbjornt/hear)

### text-to-speech engines
The text-to-speech supports the following engines:

#### Elevenlabs (paid, free account available)
Requires an API key and a voice ID set in the .env file.

#### OSX (free)
Text-to-speech uses the native [say cli interface](https://maithegeek.medium.com/having-fun-in-macos-with-say-command-d4a0d3319668)


### Roadmap
- ✅ MVP
- ✅ OSX adapters
- 🟨 Eleven labs adapters
- 🟨 pico voice adapters
- 🟨 Move constants to env file
- 🟨 Expose web UI
- 🟨 Install instructions for Raspberry PI