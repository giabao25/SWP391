package DLLS.DLLS.DLLSMain.service.Package;

import DLLS.DLLS.DLLSMain.dbutils.DBUtils;
import DLLS.DLLS.DLLSMain.entity.Package.PackageMain;
import DLLS.DLLS.DLLSMain.repositories.Package.PackageRepository;
import org.springframework.stereotype.Service;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Service
public class PackageMainService implements PackageRepository {


    private final static String selectAllPackage = "SELECT dlls.dbo_package.packageid, dlls.dbo_package.package_detailid, dlls.dbo_package.package_name,\n" +
            " dlls.dbo_packagedetail.description, dlls.dbo_packagedetail.practical_time_total, dlls.dbo_packagedetail.total_theory_question\n" +
            "FROM dlls.dbo_package, dlls.dbo_packagedetail\n" +
            "WHERE dlls.dbo_package.package_detailid = dlls.dbo_packagedetail.package_detailid";
    private final static String sellectPackageByID = "SELECT dlls.dbo_package.packageid, dlls.dbo_package.package_detailid, dlls.dbo_package.package_name,\n" +
            " dlls.dbo_packagedetail.description, dlls.dbo_packagedetail.practical_time_total, dlls.dbo_packagedetail.total_theory_question\n" +
            "FROM dlls.dbo_package, dlls.dbo_packagedetail\n" +
            "WHERE dlls.dbo_package.package_detailid = dlls.dbo_packagedetail.package_detailid && dlls.dbo_package.packageid = ?";

    @Override
    public List<PackageMain> listPackage() throws SQLException {
        List<PackageMain> list = new ArrayList<>();
        Connection conn = null;
        PreparedStatement ptm = null;
        ResultSet rs = null;
        try {
            conn = DBUtils.getConnection();
            if (conn != null) {
                ptm = conn.prepareStatement(selectAllPackage);
                rs = ptm.executeQuery();
                while (rs.next()) {
                    int packageID = rs.getInt("packageid");
                    int packageDetailID = rs.getInt("package_detailid");
                    String packageName = rs.getString("package_name");
                    String packageDesciption = rs.getString("description");
                    int practical_time_total = rs.getInt("practical_time_total");
                    int total_theory_question = rs.getInt("total_theory_question");
                    PackageMain packageMain = new PackageMain(packageID, packageName, packageDetailID, packageDesciption, practical_time_total, total_theory_question);
                    list.add(packageMain);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (ptm != null) {
                ptm.close();
            }
            if (conn != null) {
                conn.close();
            }
        }
        return list;
    }

    @Override
    public PackageMain getPackageByID(int id) throws SQLException {
//        String id1 = Integer.toString(id);
        PackageMain packageMain = new PackageMain();
        Connection conn = null;
        PreparedStatement ptm = null;
        ResultSet rs = null;
        try {
            conn = DBUtils.getConnection();
            if (conn != null) {
                ptm = conn.prepareStatement(sellectPackageByID);
                ptm.setInt(1, id);
                rs = ptm.executeQuery();
                while (rs.next()) {
                    int packageID = rs.getInt("packageid");
                    int packageDetailID = rs.getInt("package_detailid");
                    String packageName = rs.getString("package_name");
                    String packageDesciption = rs.getString("description");
                    int practical_time_total = rs.getInt("practical_time_total");
                    int total_theory_question = rs.getInt("total_theory_question");
                    packageMain = new PackageMain(packageID, packageName, packageDetailID, packageDesciption, practical_time_total, total_theory_question);
                }
            }

        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (rs != null) {
                rs.close();
            }
            if (ptm != null) {
                ptm.close();
            }
            if (conn != null) {
                conn.close();
            }
        }
        return packageMain;
    }
}
