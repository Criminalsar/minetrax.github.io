---
sidebar_position: 2
title: Plugin's config.yml
id: plugin-config-yaml
---

Using `config.yml` you can modify various aspect of the plugin to suite your need.
In this section we will discuss about the details of those variables.

#### Content of config.yml
```yml title=plugins/Minetrax/config.yml
enabled: true
api-host:
api-key:
api-secret:
server-id:
webquery-host: 0.0.0.0
webquery-port: 25569
enable-consolelog: true
enable-chatlog: true
report-server-intel: true
report-player-intel: true
web-message-format: '&b[WEB]&r {USERNAME} {MESSAGE}&r'
remind-player-to-link: true
remind-player-interval: 300
remind-player-link-message:
  - "&lHey there! It seems you haven't linked your player in web yet."
  - "&lLink now and earn rewards & perks!"
  - "&lType /account-link to begin"
  - "&oIf you have already linked and getting this message try rejoining the server"
enable-whois-on-player-join: true
enable-whois-on-command: true
whois-admin-permission-name: ww.admin
whois-no-match-found-message: "&4&lNo matching player found with your whois query"
whois-player-on-first-join-message:
  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"
  - "&e&oNo data found for this player on web!"
whois-player-on-join-message:
  - "&a&l{USERNAME}&r is coming from &a&l{COUNTRY}&r"
  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"
  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"
  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"
  - "&e&o{URL}&r"
whois-player-on-command-message:
  - "&a&l{USERNAME}&r is from &a&l{COUNTRY}&r"
  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"
  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"
  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"
  - "&e&o{URL}&r"
whois-player-on-admin-command-message:
  - "&a&l{USERNAME}&r is from &a&l{GEO}&r"
  - "&6Position&r: &b&l#{POSITION}&r - &6Rank&r: &b&l{RANK}&r"
  - "&6Rating&r: &b&l{RATING}&r - &6Score&r: &b&l{SCORE}&r"
  - "&6Linked with&r: &b&l{USER}&r - &6Last Seen&r: &b&l{LAST_SEEN}&r"
  - "&e&o{URL}&r"
whois-multiple-players-title-message: '&a&lThere is total &e&l{COUNT}&r &a&lplayers found.'
whois-multiple-players-list-message: '&6#{POSITION}&r - &b{USERNAME}&r'
```