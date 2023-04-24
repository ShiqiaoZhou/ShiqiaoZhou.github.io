---
layout: page
title: End-to-end Human-Object Interaction Network with Multi-modal Prior
description: An improvement of an Human-Object Interaction SOTA model
img: assets/img/Projects/HOI.png
importance: 2
category: Research Experiences
---
This is a research project in [COMP8536 Advanced Topics in Deep Learning for Computer Vision](https://programsandcourses.anu.edu.au/2022/course/COMP8536), ANU.

For Human Object Interaction (HOI) Detection task, One essential perception how to locate the human position, and
combine the human object instances with a specific interaction more effectively. However, the current one-stage HOI
Detection model based on transformer doesn’t give much prior information on HOI locations locations and interaction
classes. 

We proposed a novel HOI grouping block to group the human and objects into a HOI instance  in a more efficient way. To enhance the prediction of HOI action, we fuse the pre-trained verb vectors for all actions in the dataset as linguistic query to help model predicting the interaction type. Finally, we come up with a new two dimensional positional encoding based on two-dimensional fourier series for enhancing the priori location encoding of HOI instances.

Results: We acheievd best performance in class. And I got 88 (High Distinction) in this course. 

To see our report [here](https://drive.google.com/file/d/1P7f-ST3xOWq-8eX7AkAdB-uFMaaT3W68/view?usp=sharing)
<!-- 
- Single Atom Electrocatalysis
  - Nat. Commun., 2022, 13, 1, 1-13. [[HTML]](https://www.nature.com/articles/s41467-022-29357-7) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2022ncomms.pdf)
  - ACS Catal., 2022, 12, 11, 6606-6617. [[HTML]](https://pubs.acs.org/doi/abs/10.1021/acscatal.2c01470) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2022acscatal.pdf)
  - ACS Catal. 2022, 12, 18, 11380-11390. [[HTML]](https://pubs.acs.org/doi/abs/10.1021/acscatal.2c02383) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2022acscatal_2.pdf)
- Interfacial Effects
  - Nat. Catal., 2022, 5, 10, 923-933. [[HTML]](https://doi.org/10.1038/s41929-022-00851-x) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2022jacs.pdf) -->
