package DLLS.DLLS.DLLSMain.entity.Package;

import jakarta.persistence.*;

@Entity
@Table(name = "dbo.packagedetail", schema = "dlls")
public class PackageDetail {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "PackageDetailID")
    String PackageDetailID;
    @Column(name = "Description")
    String Description;
    @Column(name = "Practical_time_total")
    int Practical_time_total;
    @Column(name = "Total_theory_question")
    int Total_theory_question;

    public PackageDetail() {
    }

    public PackageDetail(String packageDetailID, String description, int practical_time_total, int total_theory_question) {
        PackageDetailID = packageDetailID;
        Description = description;
        Practical_time_total = practical_time_total;
        Total_theory_question = total_theory_question;
    }

    public String getPackageDetailID() {
        return PackageDetailID;
    }

    public void setPackageDetailID(String packageDetailID) {
        PackageDetailID = packageDetailID;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }

    public int getPractical_time_total() {
        return Practical_time_total;
    }

    public void setPractical_time_total(int practical_time_total) {
        Practical_time_total = practical_time_total;
    }

    public int getTotal_theory_question() {
        return Total_theory_question;
    }

    public void setTotal_theory_question(int total_theory_question) {
        Total_theory_question = total_theory_question;
    }

    @Override
    public String toString() {
        return "PackageDetail{" +
                "PackageDetailID='" + PackageDetailID + '\'' +
                ", Description='" + Description + '\'' +
                ", Practical_time_total=" + Practical_time_total +
                ", Total_theory_question=" + Total_theory_question +
                '}';
    }
}
