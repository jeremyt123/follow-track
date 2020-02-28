# Github follower tracker
# This program creates a list of people who don't follow you back on Github

from bs4 import BeautifulSoup
import requests

followers = []  # List to store all of your followers
following = []  # List to store all people you follow
fakeFans = []  # list of people who you follow but don't follow you

URL = "https://github.com/"

print("enter your github username:")
username = input()

URLfollowers = URL + username + "?tab=followers"
URLfollowing = URL + username + "?tab=following"

# gets HTML from followers page
page = requests.get(URLfollowers)
followersHTML = page.content

# gets HTML from following page
page = requests.get(URLfollowing)
followingHTML = page.content

# getting the followers data
soup = BeautifulSoup(followersHTML, "html.parser")

#  loops through and finds all followers
for a in soup.findAll('span', attrs={'class': 'link-gray pl-1'}):
    followers.append(a.text)

# getting the following data
soup = BeautifulSoup(followingHTML, "html.parser")

#  loops through and finds all following
for a in soup.findAll('span', attrs={'class': 'link-gray pl-1'}):
    following.append(a.text)

followsBack = 0
# checks who doesnt follow you
for person in following:
    for person2 in followers:
        if person2 == person:
            followsBack = 1
    if followsBack == 0:
        fakeFans.append(person)
    followsBack = 0

print("People who don't follow you:")
for person in fakeFans:
    print(person)

input()
