package com.dio.livecoding.crud.salasdereuniao.model;

import org.aspectj.lang.annotation.After;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.time.LocalDate;
import java.time.LocalTime;

public class AfterValidator implements ConstraintValidator<After, LocalTime> {

    private LocalTime hora;

    public void initialize(After annotation) {
        hora = LocalTime.parse(annotation.value());
    }

    public boolean isValid(LocalTime value, ConstraintValidatorContext context) {
        boolean valid = true;
        if (value != null) {
            if (!value.isAfter(hora)) {
                valid = false;
            }
        }
        return valid;
    }
}
