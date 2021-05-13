package in.ac.jyothyit.organization;

import java.sql.Connection;

import in.ac.jyothyit.organization.utils.jdbcUtitilies;

public class Test {
    public static void main(String[] args) {
        Connection connection = jdbcUtitilies.getConnection("organization");
        if(connection == null) {
            System.out.println("Connection is null");
        }
    }
}