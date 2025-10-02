
Design and assets:
- LoL assets (hextech, logo, typography, key art, end card): https://www.leagueoflegends.com/en-us/league-of-legends-downloads/
- https://www.pentagram.com/work/league-of-legends
- "high fantasy"
- https://engineering.atspotify.com/2023/1/whats-a-listening-personality
    - MBTI for listening personality
- https://www.apple.com/ca/newsroom/2022/11/apple-music-launches-new-replay-experience-reveals-2022s-top-charts/
- https://www.aboutamazon.com/news/entertainment/amazon-music-recap-delivered-2024-songs-artists-podcasts
- https://blog.youtube/news-and-events/2024-music-recap-youtube/
- Instagram year-end collages with share button
- https://store.steampowered.com/replay/76561198092387302/2024
    - stats highlight cards, achievements/gamesplayed/streak compared to median, interactive charts, playtime + achievements + screenshots by game, timeline of games played
    - web-first interactive design. instantly generates any year.
- https://www.riotgames.com/en/legal

## Design
- consider web-first design for the hackathon project since I assume most people will be on web
- what kind of video format or animations fit web better? wide screen
- what kinds of design are used in LoL? emphasis on art, cohesive aesthetics, lore, fantasy
- visual effects
- sound design: gameplay cues, feedback (good or bad), driving emotion
- user interface; visual design principles: present complex info in a simple, intuitive way.
    - audience: what kinds of things do they connect with? (fav champ)
- https://github.com/pipe01/legendary-rune-maker/tree/master/Legendary%20Rune%20Maker/Images
- https://nasaprospect.com/
- LoL minimap UI with stats per lane as you hover over them
- ARAM stats
- community dragon assets: https://raw.communitydragon.org/15.19/plugins/rcp-fe-lol-static-assets/global/default/images/

TODO:
- possibly move assets (images, fonts) to AWS storage
- make background simply just that community dragon image
- hero knockout/cutout
- parallax ekko and jinx (and accompanying sounds) should appear as you initially scroll thru the hero page
- rewind effects overlay
- find a solution with motion or react that allows the video to scroll smoothly
https://youtu.be/w7z-HZ32FnI


## page design
1. "REWIND" text; maybe LoL client blue background with magic
    - soundscape: tape reverse sound effect; maybe with splices of Arcane soundtrack and other LoL sounds
        - https://freesound.org/people/cribbler/sounds/511454/ cut into beginning and looping middle section
    - EKKO ULT??? EKKO SOUND EFFECTS???? YO?? EKKO WATCH TICKING?
    - mute button on page
    - depth: some particles flying out when ekko smashes the title
2. Enter Riot ID as input -> waiting screen while data is loading
    - some fun loading animation if it is more than 1s
3. Timeline of gameplay throughout the year
    - https://mui.com/material-ui/react-timeline/
    - events like: first time playing X champ, Y champ is released, Worlds
    - key statistics and achievements - reached 10k kills, etc. maybe Challenges API?
        - is it possible to get M/GM/C Challenges and date of achievement?
    - define as img, date, description
4. Generate your profile picture
    - prompt for a photo input or take one. it will put your face on ur most-played champ
    - maybe you can select another champ if you don't like that one
    - use nano banana or some image generation model (this is the "AI" part)
5. Kadeem vs. you vs. Faker stats comparison
    - rows will animate one at a time, showing KDA, positions played
6. You now vs. before
    - maybe first 100 vs. last 100, or first 6 months vs. last 6 months if not enough games
    - playstyle, roles, etc
7. End screen - stats card
    - pick from different stats card images to share with friends
    - contrast from background colour; maybe pink?
    - inspo: FIFA, Pokemon https://www.behance.net/gallery/196954477/Valorant-Clove-Act-II-Agent-Launch?tracking_source=search_projects|RIOT+GAMES&l=7
    - include watermark for site
    - maybe some fun particles for flair

X. More ideas
    - games per month; or some other fun way to display games played, like the GitHub contributions chart

question: how should AI be integrated into the app?
    - image generation
    - LLMs are good at generating natural language insights
        - compare player stats card before and after

## Design inspiration
https://www.awwwards.com/websites/sites_of_the_year/
https://www.behance.net/search/projects/valorant%20paris?tracking_source=typeahead_search_direct
https://eiger-extreme.mammut.com/
- one part of the image in front of the text
