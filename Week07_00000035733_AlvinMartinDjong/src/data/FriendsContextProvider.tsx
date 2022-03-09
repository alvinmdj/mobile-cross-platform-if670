import React, { useState } from 'react'
import FriendsContext, { Friend } from "./friend-context"

const FriendsContextProvider: React.FC = props => {
  const [friends, setFriends] = useState<Friend[]>([
    {
      id: 'f1',
      name: 'John Thor',
      photo: 'f1.webp'
    },
    {
      id: 'f2',
      name: 'John Ness',
      photo: 'f1.webp'
    },
    {
      id: 'f3',
      name: 'John Dhoe',
      photo: 'f1.webp'
    }
  ])

  const addFriend = (name: string, photo: string) => {
    const newFriend: Friend = {
      id: Math.random().toString(),
      name,
      photo
    }

    setFriends(currFriends => {
      return currFriends.concat(newFriend)
    })
  }

  const updateFriend = (id: string, name: string, photo: string) => {
    const updatedFriend: Friend = { id, name, photo }
    const updatedFriendIndex = friends.findIndex(friend => friend.id === id)
    setFriends(currFriends => {
      currFriends[updatedFriendIndex] = updatedFriend
      return currFriends
    })
  }

  const deleteFriend = (id: string) => {
    setFriends(currFriends => {
      return currFriends.filter(curr => curr.id !== id)
    })
  }

  return (
    <FriendsContext.Provider value={{ 
      friends,
      addFriend,
      updateFriend,
      deleteFriend
    }}>
      {props.children}
    </FriendsContext.Provider>
  )
}

export default FriendsContextProvider