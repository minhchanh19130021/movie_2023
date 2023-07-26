package com.fit.nlu.backend.utils;

import org.springframework.stereotype.Component;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.format.DateTimeParseException;
@Component
public class DateUtils {

    public static final String[] SUPPORTED_DATE_FORMATS = {
            "yyyy-MM-dd",
            "yyyy-MM-dd HH:mm:ss",
            "MM/dd/yyyy",
            "MM/dd/yyyy HH:mm:ss",
            "dd-MM-yyyy",
            "dd-MM-yyyy HH:mm:ss"
    };

    public static LocalDate convertStringToDate(String dateString) {
        for (String format : SUPPORTED_DATE_FORMATS) {
            try {
                DateTimeFormatter formatter = DateTimeFormatter.ofPattern(format);
                return LocalDate.parse(dateString, formatter);
            } catch (DateTimeParseException e) {
                System.out.println(e);
            }
        }

        throw new IllegalArgumentException("Can't convert date: " + dateString);
    }
}

