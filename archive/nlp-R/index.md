---
title: "Natural Language Processing in R"
date: "2020-04-20T00:00:00Z"
team: true
authors: 
    - Subhrajyoty Roy
    - Ritoban Kundu
imageCaption: "[Thiloshon Nagarajah](https://thiloshon.wordpress.com/category/natural-language-processing/)"
summary: "Understanding of changes in US president's views by analyzing presidential speech data."
tags:
  - Natural Language Processing
  - Time Series Analysis

links:
    - name: Github Repository
      icon: "fab fa-github"
      link: "https://github.com/subroy13/NLPinR"
      color: dark

    - name: Dataset
      icon: "fas fa-database"
      link: "https://github.com/subroy13/NLPinR/tree/master/datasets/presidential-speeches"
      color: success
---

# Aim of the Project

This project has several goals:

1. Understanding different concepts of Natural Language Processing and implement them in `R`.
2. Understanding the preprocessing part of text mining extensively, so that it can be applied to different native languages, like Bengali, which is my native language.
3. Exploring changepoints in literatures by crucially examining the distribution of different words as a time series.


# Project Reports

1. [**Text Mining in R :**](https://subroy13.github.io/NLPinR/Reports/chapter1) Here, we use the `tidytext` package in `R` to understand some basics about text mining, as well as, explore functionalities of the package. We shall look at the usage of `tf-idf` and how it can be used as a filtration to obtain the important words from the documents of a corpus. Click [here](https://subroy13.github.io/NLPinR/Reports/chapter1) to take a look at the report.

2. [**Text Classification in R :**](https://subroy13.github.io/NLPinR/Reports/chapter2) Here, we conduct a text classification task based on the dataset of US president's speeches. We collect the speeches for all United States presidents, and then given an input of a speech, we try to predict whether that president belongs to the Republican or Democratic party. We also wish to understand, which words are more important to make such predictions, as well as understand the latent philosophy of those parties based on corresponding president's speeches. Click [here](https://subroy13.github.io/NLPinR/Reports/chapter2) to take a look at the report.

3. [**Changepoint Analysis in R :**](https://subroy13.github.io/NLPinR/Reports/chapter3) Here, we continue with the speech dataset of US presidents, and then perform a simple changepoint detection algorithm to understand the timepoints where lingusitic shifts occur. Click [here](https://subroy13.github.io/NLPinR/Reports/chapter3) to take a look at the report.











