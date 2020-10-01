package com.NopCommerce;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class LoadProp {
    private File file;
    private FileInputStream fileInputStream;
    private Properties properties = new Properties();

    public String readProperties(String key) {
        file = new File("src\\test\\resources\\config.properties");
        try {
            fileInputStream = new FileInputStream(file);
            properties.load(fileInputStream);
        } catch (FileNotFoundException exception) {
            exception.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return properties.getProperty(key);
    }
}
