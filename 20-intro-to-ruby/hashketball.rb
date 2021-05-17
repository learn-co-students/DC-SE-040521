require "pry"

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1,
        },
        {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7,
        },
        {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15,
        },
        {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5,
        },
        {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1,
        },
      ],
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2,
        },
        {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10,
        },
        {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5,
        },
        {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0,
        },
        {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12,
        },
      ],
    },
  }
end


def home_hash
  game_hash[:home]
end

def home_players
  home_hash[:players]
end

def all_players
  players = home_players + game_hash[:away][:players]
  # players.map do |player_hash|
  #   player_hash[:player_name]
  # end
end

def find_player(name)
  all_players.find do |player_hash|
    player_hash[:player_name] == name
  end
end

def all_teams
  game_hash.values
end

def num_points_scored(player)
  # knows the number of points scored by a player
  find_player(player)[:points]
end

def shoe_size(player)
  # knows the shoe size of a player
  find_player(player)[:shoe]
end

def team_colors(team)
  # knows what the team's colors are
  found_team = all_teams.find do |team_hash|
    team_hash[:team_name] == team
  end

  found_team[:colors]
end

def team_names
  # return the team names
  all_teams.map do |team_hash|
    team_hash[:team_name]
  end
end

def player_numbers(team)
  # returns all player jersey numbers

  # 1. find team players
  found_team = all_teams.find do |team_hash|
    team_hash[:team_name] == team
  end[:players]

  # 2. map to jersey number
  team_jerseys = found_team.map do |player_hash|
    player_hash[:number]
  end

  # 3. sort jersey numbers
  team_jerseys.sort
end

def player_stats(player)
  # returns all stats for a given player
  found_player = find_player(player)
  found_player.delete(:player_name)
  found_player
end

def big_shoe_rebounds
  # returns the number of rebounds of the player with the biggest shoe size
  biggest_shoe_guy = all_players.max_by {|player| player[:shoe]} 
  biggest_shoe_guy[:rebounds]
end

binding.pry
