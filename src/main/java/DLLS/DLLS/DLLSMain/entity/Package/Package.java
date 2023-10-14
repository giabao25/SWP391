package DLLS.DLLS.DLLSMain.entity.Package;

import jakarta.persistence.*;

@Entity
@Table(name = "dbo.package", schema = "dlls")
public class Package {
    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    int id;
    @Column(name = "PackageID")
    String packageID;
    @Column(name = "PackageDetailID")
    String packageDetailID;
    @Column(name = "PackageName")
    String packageName;

    public Package() {
    }

    public Package(String packageID, String packageDetailID, String packageName) {
        this.packageID = packageID;
        this.packageDetailID = packageDetailID;
        this.packageName = packageName;
    }

    public String getPackageID() {
        return packageID;
    }

    public void setPackageID(String packageID) {
        this.packageID = packageID;
    }

    public String getPackageDetailID() {
        return packageDetailID;
    }

    public void setPackageDetailID(String packageDetailID) {
        this.packageDetailID = packageDetailID;
    }

    public String getPackageName() {
        return packageName;
    }

    public void setPackageName(String packageName) {
        this.packageName = packageName;
    }

    @Override
    public String toString() {
        return "Package{" +
                "packageID='" + packageID + '\'' +
                ", packageDetailID='" + packageDetailID + '\'' +
                ", packageName='" + packageName + '\'' +
                '}';
    }
}
