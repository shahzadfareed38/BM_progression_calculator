function progressionFormula(percentageRate, lastWallThickness, punchSize) {
    let reduction = 100 - percentageRate;
    reduction = reduction / 100;
    let nextReduction = reduction * lastWallThickness;
    let totalReduction = nextReduction * 2;
    return {
        size: totalReduction + punchSize,
        nextThickness: nextReduction
    };
}

function calculate() {
    const coilThickness = parseFloat(document.getElementById('coilThickness').value);
    const punchSize = parseFloat(document.getElementById('punchSize').value);
    const increaseRate = parseFloat(document.getElementById('increaseRate').value);

    const finalCupThickness = coilThickness * increaseRate;

    // Redraw (4%)
    let step1 = progressionFormula(4.0, finalCupThickness, punchSize);

    // 1st Ring (25%)
    let step2 = progressionFormula(25, step1.nextThickness, punchSize);

    // 2nd Ring (25%)
    let step3 = progressionFormula(25, step2.nextThickness, punchSize);

    // 3rd Ring (40%)
    let step4 = progressionFormula(40, step3.nextThickness, punchSize);

    document.getElementById('results').style.display = 'block';
    document.getElementById('redraw').innerHTML = `<b>Redraw Size:</b> ${step1.size.toFixed(4)} mm`;
    document.getElementById('ring1').innerHTML = `<b>1st Ring Size:</b> ${step2.size.toFixed(4)} mm`;
    document.getElementById('ring2').innerHTML = `<b>2nd Ring Size:</b> ${step3.size.toFixed(4)} mm`;
    document.getElementById('ring3').innerHTML = `<b>3rd Ring Size:</b> ${step4.size.toFixed(4)} mm`;
}