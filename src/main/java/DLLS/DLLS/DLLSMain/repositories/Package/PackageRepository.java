package DLLS.DLLS.DLLSMain.repositories.Package;

import DLLS.DLLS.DLLSMain.entity.Package.PackageMain;
import org.springframework.stereotype.Repository;

import java.sql.SQLException;
import java.util.List;

@Repository
public interface PackageRepository {
    List<PackageMain> listPackage() throws SQLException;
    PackageMain getPackageByID(int id) throws SQLException;
}
