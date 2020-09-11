package io.steviemul.libraries;

public class LibraryException extends Throwable {

  private final String message;
  private final int statusCode;

  public LibraryException(String message, int statusCode) {
    this.message = message;
    this.statusCode = statusCode;
  }

}
