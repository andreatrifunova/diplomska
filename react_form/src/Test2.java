import org.testng.Assert;
import org.testng.annotations.Test;
import org.openqa.selenium.chrome.*;

// import javax.print.DocFlavor.URL;

import org.openqa.selenium.*;
// import org.apache.poi.ss.*;
// import org.apache.poi.hssf.*;;

// import org.apache.poi.xssf.usermodel.XSSFCell;
// import org.apache.poi.xssf.usermodel.XSSFSheet;

public class Test2 {
        // public static XSSFSheet excelSheet;
        // public static XSSFCell cell;
        // public static WebDriver driver;
        public static void main(String[] args) {
        
          // excelSheet = Main.readExcel("react_form\\src\\credentials.xlsx", "Sheet1");
         
        }
        
        @Test
        public void check() throws InterruptedException{
          System.setProperty("webdriver.chrome.driver", "/Users/andreatrifunova/Desktop/react_app/react_form/test/resources/drivers/chromedriver");
          WebDriver driver = new ChromeDriver();
          for (int i = 0; i <500; i++) {
            driver.get("http://localhost:3001/");

            WebElement username = driver.findElement(By.cssSelector("#form > input[type=text]:nth-child(1)"));
            username.sendKeys(i + "username124@gmail.com");
            WebElement password = driver.findElement(By.cssSelector("#form > input[type=text]:nth-child(2)"));
            password.sendKeys("password");
            driver.findElement(By.className("btn")).click();


            Assert.assertNotEquals(username, null);  
          }

          driver.close();
        }
    

        // .sendKeys(excelSheet.getRow(i).getCell(0).getStringCellValue());

//     public static XSSFSheet readExcel(String Path, String SheetName) {
//       try {
//         System.out.println(Path);
//         FileInputStream ExcelFile = new FileInputStream(Path);
//         ExcelWBook = new XSSFWorkbook(ExcelFile);
//         ExcelWSheet = ExcelWBook.getSheet(SheetName);
//   }   catch (Exception e) {
//         System.out.println(e);
//   }
//       return ExcelWSheet;
//  }
}
