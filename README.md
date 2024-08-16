# sgrw-flow-calculator
A flow calculator for Stormguard Rainwater's rainwater product range.

# flow calculator
## inputs:
1. length
2. depth
3. pitch 
4. num of outlets
5. proposed system
6. distance between outlets
## calcs:
1. pitch adjustment value (e.g. 1.29 for 30°)
2. effective roof area = l*d*pav
3. run off = era*0.022
4. flow rate = run off/num of outlets
5. capacity - is proposed system okay? true or false
6. half distance between outlets
7. Lg/d = half distance between outlets / gutter depth
8. Lg/d : reduction factor
9. system capacity * reduction factor
10. reduced system capacity minus flow rate = is proposed system okay? true or false
## data:
1. reference object of gutter / pipe combo capacity values
2. pitch adjustment convertor function
3. gutter depth
4. Lg/d : reduction factor range table [unnecessary - only function required]
## tech desc:
Designs are based on rainfall rate of 79mm/hour
Therefore: Run Off Rate (l/s) = Effective Area (m²) x 0.022
Effective roof areas can be calculated as follows:
Roof Area = Length x Depth
For different roof pitches, the effective roof area is adjusted:
Flat Roof = No adjustment
30° = Roof Area x 1.29
45° = Roof Area x 1.50
60° = Roof Area x 1.87
### Reduction Factor
Where half the distance between 2 outlets is more than 50 times the depth of the gutter a reduction
