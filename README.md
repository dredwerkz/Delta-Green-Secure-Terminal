# Delta Green Secure Terminal

![Animated gif of text saying "Login Successful: Welcome Agent", the text randomly scrambles before returning to its original form](https://i.imgur.com/E5xbksF.gif)

## Project Breakdown

Delta Green Secure Terminal is a passion project designed to be an all-in-one solution for Game Masters (Handlers) and Players (Agents) looking to run sessions of Delta Green, a tabletop role-playing game, over the internet.

The game revolves around players working together to unravel mysteries and decipher what they can of things they were never meant to know.
The Handler facilitates this by giving the players pictures, notes, sounds, videos and descriptions of their environment; and this is where the Secure Terminal comes into play.

With a click of a button, players can be transported from one place to the next, be given handouts they must investigate, or roll the dice that determine their successes and failures - all live and in a collaborative environment with their fellow Agents and Handler.

Agents can manipulate their handouts, storing them in the files or arranging them on their terminal screen, all of which is saved persistently, meaning sessions can be picked up right where they got left off.

Handlers have complete control of which Agents see what. They find themselves in an abandoned warehouse on the docks? Pull up the location image.
One player has a knack for the unnatural? Perhaps you show them something else.
Handlers are given complete control over their Agents' experience, from directly editing individual Agent inventories to grouping them dynamically, making asset management a breeze, this platform is designed to minimize downtime and keep players immersed in the game world they're desperately trying to survive.

I started working on Secure Terminal after wanting to run a game of Delta Green and finding that every currently existing solution either didn't have the features I felt made Delta Green worth playing, or they felt like using a sledgehammer to hammer in a nail.

So why not make my own?

## Table of Contents

-   [Project Breakdown](#project-breakdown)
-   [Technologies Used](#technologies-used)
-   [Features](#features)
-   [Screenshots](#screenshots)
-   [Setup and Installation](##-setup-and-installation)
-   [Usage](#usage)
-   [Development Process](#development-process)
-   [Challenges and Learnings](#challenges-and-learnings)
-   [Future Scope and Enhancements](#future-scope-and-enhancements)
-   [Contributing](#contributing)
-   [License](#license)
-   [Contact](#contact)

## Technologies Used

-   React: The user interface for both Agent and Handler is based on React. Component-based architecture makes building a responsive and dynamic UI that responds to other users' actions a cinch.

-   TypeScript: A language that until now I'd only had fleeting opportunities to use, so I figured this would be a great learning opportunity for me. Utilising the advantages that TypeScript has over JavaScript in an environment where data is being sent between multiple users and a server seemed like a perfect opportunity to stress-test my knowledge and actually take advantage of TS's features.

-   WebSocket: A multi-player platform and WebSocket go hand-in-hand. Having real-time, bi-directional communication between the clients and the server is a must for this application, and implementing has been another great learning opportunity for me getting to grips with technologies I haven't otherwise had an opportunity to learn.

-   PostgreSQL: Live updates are one thing but persistently storing data between sessions is a must for a project like this, so handling communications over WebSocket while storing any changes that should be recorded makes a PostgreSQL database an obvious choice.

-   Express: A minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications. In this project, Express is used to set up the server and API, facilitating the communication between the front-end and the database.

## Features

In the current development cycle:

### Agent UI:

* Drag & Drop inventory system, able to place and move assets around the page

* Note taking & sharing amongst other users

* Game Controls - rolling pre-set dice configurations and sending the same result to all relevant clients

### Handler UI:

* Uploading & managing images, media and assets

* Adding/Removing assets from Agent inventories

* Managing game-board state (background etc)

### Background Functionality

* WebSocket & SQL handlers for collaborative actions

* User authentication

You can read more about planned features and how I'm going to tackle them below!

## Screenshots

![Screenshot of the game-board with the Inventory tab expanded to show some photograph assets](https://i.imgur.com/155s9Zl.png)

## Setup and Installation

Project is still in early stages! Self-deployment/setup isn't currently supported.

## Usage

When Secure Terminal is deployed it'll be free-to-use online, all it requires is an account for each unique Handler/Agent.
When it's deployment-ready I'll update the links here! :)

## Development Process

With this being a personal project rather than a commercial one - delivering regular deployable MVPs hasn't been a priority, allowing me to develop this project in a way that keeps me motivated and engaged, so very manoeuvrable but not necessarily agile - if I'm enjoying working on a component, or a problem's found its way into my head that's what I'm going to be working on 'til it's done.

That being said, there is an overarching plan - but with no delivery deadlines it's more a general direction than a product plan.

A Trello board with features and foundations, highlighting requirements and blockers is being used as reference for what needs to be done when.
When I've finished one ticket I'll grab another one that needs doing before the project can move forward and get cracking.

Front-end and visuals are being worked on before moving to back-end development and deployment.

Obviously this works when it's a for-fun project made by a single person, but would rapidly break down if even a single regular developer were to jump on-board.
Some examples of Agile project management can be found in my other github repos!

## Challenges and Learnings

The biggest challenges and learnings in this project so far have been having to be self-sufficient in my learning of TypeScript and WebSocket.
Every other technology in this project's stack I've worked with before or been taught, so having to figure out what the problems I'm even facing in the first place are before I can deep dive and figure out solutions has been a bit of a fresh experience for me.

Having the discipline to go back and check the solutions I've found to certain problems to make sure they're not just hacky fixes where better standards exist is another issue - it's very easy to patch something up and call it done but leaning on my more experienced developer friends to find _better_ solutions than what I can come up with on my own has been illuminating, and has boosted my learning during this project significantly.

## Future Scope and Enhancements

Once the current development cycle is done with, the app's actually in a somewhat usable state -- so priority is to do some testing and get some feedback from players on what the priorities for future scope should be. 

Current plans for upcoming features are:

* Character sheet creator (dynamic/presets included)

* Live chat

* Asset inspection functionality

* Campaign/Session Manager

* Hot-swapping Agents into groups for easy management

* Media playback & containers

## Contributing

There's no formal process for contributing to this project, feel free to reach out if that's what you wanna do otherwise feel free to fork and do your own thing, or you can raise an issue if you have a feature request or feedback!

## License

[MPL 2.0](https://www.mozilla.org/en-US/MPL/2.0/)

## Contact

Feel free to contact me on here, or if LinkedIn's your thing, [find me here!](https://www.linkedin.com/in/jon-kelly-esports/)
