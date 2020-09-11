package io.steviemul.libraries.data.entity;

import javax.persistence.*;

@Entity
@Table(name="LIBRARY")
public class Library {

  @Id
  @Column(name="LIB_ID")
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long libId;

  @Column(name="NAME")
  private String name;

  @Column(name="DOWNLOAD_COUNT")
  private int downloadCount;

  @Column(name="AUTHOR")
  private String author;

  @Column(name="URL")
  private String url;

  public long getLibId() {
    return libId;
  }

  public void setLibId(int libId) {
    this.libId = libId;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public int getDownloadCount() {
    return downloadCount;
  }

  public void setDownloadCount(int downloadCount) {
    this.downloadCount = downloadCount;
  }

  public String getAuthor() {
    return author;
  }

  public void setAuthor(String author) {
    this.author = author;
  }

  public String getUrl() {
    return url;
  }

  public void setUrl(String url) {
    this.url = url;
  }
}
