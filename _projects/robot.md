---
layout: page
title: Design of trajectory optimization and control system for virtual photographic robot based on 6-DOF serial robot
description: My undergraduation thesis
img: assets/img/Projects/CameraRobot.png
importance: 4
category: Research Experiences
---

For the ever-increasing quality and quantity of programs in the TV industry,
the emergence of photographic robots can improve shooting efficiency and ensure
high shooting accuracy. Among them, the versatile, flexible redundant
photography robot is a higher-end industry. This project has developed a new
type of orbital redundant photography robot based on a 6-degree-of-freedom
series manipulator, which completes the mobile robot with the function of
lifting and lowering the camera position and pushing and pulling the camera
lens in the studio. The main research contents are as follows:

Firstly, the coordinate system of the redundant photography robot is
established, and the forward kinematic transformation matrix is derived by
using the improved D-H parameters. At the same time, the Jacobian pseudo-inverse
matrix of the photographic robot is solved, and the inverse kinematics numerical
solution of the photographic robot is obtained by Newton iteration method. The
code was verified in MATLAB. Completed the 3-D and 2-D drawings of the railcar
and the camera pan/tilt.

Secondly, the redundant robot hardware system has been designed. The motor
and motion control card were selected, and the hardware system connection
diagrams of the camera pan/tilt, the railcar and the camera external focus zoom
module were drawn.

Finally, the comparison of the polynomial interpolation methods is
completed, and the interpolation method of the polynomial degree five is
selected based on the smoothing of the joint angular velocity curve. A
simulation of the shooting path of the photographic robot was carried out in
MATLAB .

If you would like to read, please see [this](https://drive.google.com/file/d/1DN62gg_latEsRTYYFz42_sJ9zcDHGFzI/view?usp=share_link). Notice that it is orignally written in Chinese. And its English version may contains many errors and I do not have time to fix them. Sorry for that.


<!-- - CO2RR
  - Nat. Commun. 2017, 8, 1, 14675. [[HTML]](https://www.nature.com/articles/ncomms14675) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2017ncomms.pdf)
  - ACS Catal., 2019, 9, 7, 6252-6261. [[HTML]](https://pubs.acs.org/doi/abs/10.1021/acscatal.9b01617) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2019acscatal.pdf)
  - Nat. Energy, 2020, 5, 9, 684-692. [[HTML]](https://www.nature.com/articles/s41560-020-0667-9) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2020natene.pdf)
  - Adv. Energy Mater., 13, 6, 202203603. [[HTML]](https://onlinelibrary.wiley.com/doi/abs/10.1002/aenm.202203603) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2022aem.pdf)
- ORR
  - CCS Chem., 2022, 4, 1, 585-593. [[HTML]](https://doi.org/10.31635/ccschem.021.202000590) [[PDF]](https://zishengz.github.io/assets/pdf/papers/2022ccschem.pdf) -->
  