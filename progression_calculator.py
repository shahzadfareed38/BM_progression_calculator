coil_thickness = 0.247
print("Coil Thickness", coil_thickness)
cup_wall_thickness_increase_rate = 1.1
final_cup_thickness = coil_thickness * cup_wall_thickness_increase_rate
puch_size = 53.066
print("Punch Size", puch_size)
percentage_rate = 4.0


def progression_formula(percentage_rate, last_wall_thickness, punch_size):
    reduction = 100 - percentage_rate
    reduction = reduction / 100
    next_reduction = reduction * last_wall_thickness
    reduction = next_reduction * 2
    return reduction + punch_size, next_reduction


new_reduction = 0.0
nexReduction = 0.0

new_reduction, nexReduction = progression_formula(
    percentage_rate, final_cup_thickness, puch_size
)
print(
    "Redraw Size",
    round(new_reduction, 4),
)

percentage_rate = 25
new_reduction, nexReduction = progression_formula(
    percentage_rate, nexReduction, puch_size
)

print("1st Ring Size", round(new_reduction, 4))

percentage_rate = 25
new_reduction, nexReduction = progression_formula(
    percentage_rate, nexReduction, puch_size
)
print("2nd Ring Size", round(new_reduction, 4))

percentage_rate = 40
new_reduction, nexReduction = progression_formula(
    percentage_rate, nexReduction, puch_size
)
print("3rd Ring Size", round(new_reduction, 4))
