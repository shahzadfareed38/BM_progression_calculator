
function progressionFormula(percentageRate, lastWallThickness, punchSize) {
    let reduction = (100 - percentageRate) / 100;
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

    const redrawPct = parseFloat(document.getElementById('redrawPct').value);
    const ring1Pct = parseFloat(document.getElementById('ring1Pct').value);
    const ring2Pct = parseFloat(document.getElementById('ring2Pct').value);
    const ring3Pct = parseFloat(document.getElementById('ring3Pct').value);

    const finalCupThickness = coilThickness * increaseRate;

    const step1 = progressionFormula(redrawPct, finalCupThickness, punchSize);
    const step2 = progressionFormula(ring1Pct, step1.nextThickness, punchSize);
    const step3 = progressionFormula(ring2Pct, step2.nextThickness, punchSize);
    const step4 = progressionFormula(ring3Pct, step3.nextThickness, punchSize);

    document.getElementById('results').style.display = 'block';
    document.getElementById('redraw').innerHTML = `<b>Redraw Size (${redrawPct}%):</b> ${step1.size.toFixed(4)} mm`;
    document.getElementById('ring1').innerHTML = `<b>1st Ring Size (${ring1Pct}%):</b> ${step2.size.toFixed(4)} mm`;
    document.getElementById('ring2').innerHTML = `<b>2nd Ring Size (${ring2Pct}%):</b> ${step3.size.toFixed(4)} mm`;
    document.getElementById('ring3').innerHTML = `<b>3rd Ring Size (${ring3Pct}%):</b> ${step4.size.toFixed(4)} mm`;
}

// Basic test: ensure calculate exists on load
console.assert(typeof calculate === 'function', 'calculate() function should be defined');
