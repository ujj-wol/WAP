package dao;

import model.User;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class userDAO {
  Map<Integer, User> usersDb = new HashMap<>();

  public userDAO() {
    usersDb.put(1, new User(1, "user1", "abc"));
    usersDb.put(2, new User(2, "user2", "bcd"));
    usersDb.put(3, new User(3, "user3", "cde"));
  }

  public void addUser(User user) {
    usersDb.put(user.getId(), user);
  }

  public List<User> getAllUsers(){
    return new ArrayList<>(usersDb.values());
  }

  public int genId() {
    return usersDb.size()+1;
  }
}