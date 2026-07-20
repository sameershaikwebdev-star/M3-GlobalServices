package com.m3global.backend.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.ExternalDocumentation;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Contact;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class OpenApiConfig {

    @Bean
    OpenAPI m3GlobalOpenAPI() {

        final String securitySchemeName = "bearerAuth";

        return new OpenAPI()

                .info(new Info()
                        .title("M3 Global Services API")
                        .version("1.0.0")
                        .description("Backend APIs for M3 Global Services")
                        .contact(new Contact()
                                .name("M3 Global Services")
                                .email("admin@m3global.com")))

                .externalDocs(new ExternalDocumentation()
                        .description("Project Documentation"))

                .addSecurityItem(
                        new SecurityRequirement().addList(securitySchemeName))

                .components(new Components()
                        .addSecuritySchemes(
                                securitySchemeName,
                                new SecurityScheme()
                                        .name("Authorization")
                                        .type(SecurityScheme.Type.HTTP)
                                        .scheme("bearer")
                                        .bearerFormat("JWT")));
    }
}