const DecimalStyle = (number) => {
    return new Intl.NumberFormat('es-AR', {style: 'decimal', minimumFractionDigits: 2}).format(number);
};

export default DecimalStyle;
