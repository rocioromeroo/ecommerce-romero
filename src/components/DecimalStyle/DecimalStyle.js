const DecimalStyle = (number) => {
    return new Intl.NumberFormat('es-AR', {style: 'decimal'}).format(number);
};

export default DecimalStyle;
