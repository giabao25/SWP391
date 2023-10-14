package DLLS.DLLS.DLLSMain.entity.Package;

import jakarta.persistence.Column;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

public class PackageMain {
    int packageID;
    String packageName;
    int PackageDetailID;
    String Description;
    int Practical_time_total;
    int Total_theory_question;

    public PackageMain() {
    }

    public PackageMain(int packageID, String packageName, int packageDetailID1, String description, int practical_time_total, int total_theory_question) {
        this.packageID = packageID;
        this.packageName = packageName;
        PackageDetailID = packageDetailID1;
        Description = description;
        Practical_time_total = practical_time_total;
        Total_theory_question = total_theory_question;
    }

    public int getPackageDetailID() {
        return PackageDetailID;
    }

    public void setPackageDetailID(int packageDetailID) {
        PackageDetailID = packageDetailID;
    }

    public int getPackageID() {
        return packageID;
    }

    public void setPackageID(int packageID) {
        this.packageID = packageID;
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

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    @Override
    public String toString() {
        return "PackageMain{" +
                " packageID='" + packageID + '\'' +
                ", packageName='" + packageName + '\'' +
                ", PackageDetailID='" + PackageDetailID + '\'' +
                ", Description='" + Description + '\'' +
                ", Practical_time_total=" + Practical_time_total +
                ", Total_theory_question=" + Total_theory_question +
                '}';
    }
}
