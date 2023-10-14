package DLLS.DLLS.DLLSMain.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "dbo.users", schema = "dlls")
public class User {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "email", length = 45)
    String email;
    @Column(name = "password", length = 45)
    String password;
    @Column(name = "role", length = 45)
    String role;
    @Column(name = "status", length = 45)
    String status;

    public User() {
    }
    public User(String name, String password, String role, String status) {
        this.email = name;
        this.password = password;
        this.role = role;
        this.status = status;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "UserDTO{" +
                "name='" + email + '\'' +
                ", password='" + password + '\'' +
                ", role='" + role + '\'' +
                ", status='" + status + '\'' +
                '}';
    }
}
