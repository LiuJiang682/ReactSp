package au.gov.vic.ecodev;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.AsyncConfigurerSupport;

@SpringBootApplication
//public class App extends AsyncConfigurerSupport {
public class App {
    public static void main(String[] args) {
        SpringApplication.run(App.class);
    }
}
