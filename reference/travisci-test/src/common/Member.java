package common;

public class Member {
  private String name;
  private String email;
  private String out;

  public Member() {
  }

  public Member(String name, String email) {
    this.name = name;
    this.email = email;
    this.out = name + ": " + email;
  }

  public String getOut() {
    return out;
  }
}